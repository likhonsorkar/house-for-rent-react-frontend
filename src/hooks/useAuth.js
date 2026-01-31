import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorMSG, setErrorMSG] = useState("");
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
    
    const loginUser = async(userData) =>{
        setErrorMSG("");
        try{
            const response = await apiClient.post("/auth/jwt/create", userData);
            setAuthTokens(response.data)
            localStorage.setItem("authTokens", JSON.stringify(response.data));
        }catch (error){
             console.log(error);
             setErrorMSG(error.response.data?.detail);
        }
    }

    return { user, errorMSG, loginUser};
}
export default useAuth;