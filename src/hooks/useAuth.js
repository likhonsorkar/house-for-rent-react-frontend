import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorMSG, setErrorMSG] = useState("");
    const [successMSG, setSuccessMSG] = useState("");
    const getToken = () => {
        const token = localStorage.getItem("authTokens");
        return token ? JSON.parse(token) : null ;
    }

    const [authTokens, setAuthTokens] = useState(getToken());

     const fetchUserProfile = async() => {
        setErrorMSG("");
        try{
            const response = await apiClient.get("/auth/users/me", {
                headers : { Authorization : `JWT ${authTokens?.access}`},
            });
            setUser(response.data);
        }catch (error){
            setErrorMSG(error.response.data?.detail);
        }
    }
    useEffect(() => {
        if (authTokens){
            fetchUserProfile();
        }
    }, [authTokens])

    useEffect(() => {
        if (successMSG) {
            const t = setTimeout(() => setSuccessMSG(""), 2000);
            return () => clearTimeout(t);
        }
    }, [successMSG]);
    
    const loginUser = async(userData) =>{
        setSuccessMSG("")
        setErrorMSG("");
        try{
            const response = await apiClient.post("/auth/jwt/create", userData);
            setAuthTokens(response.data)
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            setSuccessMSG("Login Successful");

        }catch (error){
             console.log(error);
             setErrorMSG(error.response.data?.detail);
        }
    }

    const logoutUser = () => {
        setSuccessMSG("")
        try{
            localStorage.removeItem("authTokens");
            setAuthTokens(null); 
            setUser(null);
            setSuccessMSG("Logout Successful");
        }catch(error){
            console.log(error)
            setErrorMSG("Logout not successfull")
        }
    }

    return { user, errorMSG, successMSG,  logoutUser, loginUser};
}
export default useAuth;