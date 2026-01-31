import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuthContext = () => {
    const {user, loginUser} = useContext(AuthContext);
    return { user, loginUser};
}
export default useAuthContext;