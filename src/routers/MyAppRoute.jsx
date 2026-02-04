import { Routes, Route } from "react-router"
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Ads from "../pages/Ads";
import AdsDetails from "../pages/AdsDetails";
import Login from "../pages/Login";
import Registrations from "../pages/Registrations";
import EmailActivation from "../components/EmailActivation";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound";

const MyAppRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Registrations/>} />
                <Route path="/property" element={<Ads/>}/>
                <Route path="/property/:id" element={<AdsDetails/>}/>
                <Route path="/activate/:uid/:token" element={<EmailActivation/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>

            <Route element={<DashboardLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
        </Routes>
    );
};

export default MyAppRoute;