import { Routes, Route } from "react-router"
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Ads from "../pages/Ads";
import AdsDetails from "../pages/AdsDetails";
import Login from "../pages/Login";
import Registrations from "../pages/Registrations";
import EmailActivation from "../components/EmailActivation";

const MyAppRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Registrations/>} />
                <Route path="/homeads" element={<Ads/>}/>
                <Route path="/homeads/:id" element={<AdsDetails/>}/>
                <Route path="/activate/:uid/:token" element={<EmailActivation/>} />
            </Route>
        </Routes>
    );
};

export default MyAppRoute;