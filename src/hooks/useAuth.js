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
            const t = setTimeout(() => setSuccessMSG(""), 4000);
            return () => clearTimeout(t);
        }

        if (errorMSG) {
            const t = setTimeout(() => setErrorMSG(""), 4000);
            return () => clearTimeout(t);
        }
    }, [successMSG, errorMSG]);
    
    const loginUser = async(userData) =>{
        setSuccessMSG("")
        setErrorMSG("");
        try{
            const response = await apiClient.post("/auth/jwt/create", userData);
            setAuthTokens(response.data)
            localStorage.setItem("authTokens", JSON.stringify(response.data));
            setSuccessMSG("Wellcome Back!")
            return true;

        }catch (error){
             if(error.response && error.response.status == 500){
                setErrorMSG("Server error. Please try again later.");
                return false;
            }
             setErrorMSG(error.response.data?.detail);
             return false;
        }
    }
    const signupUser = async(userData) =>{
        setSuccessMSG("")
        setErrorMSG("");
        try{
            const response = await apiClient.post("/auth/users/", userData);
            setSuccessMSG("Registration Successful. Check you email inbox/spam to active account");
            if (response.status === 201 || response.status === 200) {
                return true;
            }
        }catch (error) {
            if(error.response && error.response.status == 500){
                setErrorMSG("Server error. Please try again later.");
                return false;
            }
            if (error.response && error.response.data){
                const errMsg = Object.values(error.response.data).flat().join("\n");
                setErrorMSG(errMsg);
                return false;
            }else{
                setErrorMSG("Registration Failed! please try later")
            }
            return false;
        }
    }
    const logoutUser = () => {
        setSuccessMSG("")
        try{
            localStorage.removeItem("authTokens");
            setAuthTokens(null); 
            setUser(null);
            setSuccessMSG("Logout Successful");
            return true;
        }catch(error){
            console.log(error);
            setErrorMSG("Logout not successfull");
            return false;
        }
    }
    const emailActivation = async(data) => {
        try{
            const response = await apiClient.post("/auth/users/activation/", data);
            console.log(response);
            return true;
        }catch (error) {
            return false;
        }
    }
    
    return { user, errorMSG, successMSG,  logoutUser, loginUser, signupUser, emailActivation};
}
export default useAuth;