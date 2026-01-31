import { Routes, Route } from "react-router"
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Ads from "../pages/Ads";
import AdsDetails from "../pages/AdsDetails";
import Login from "../pages/Login";

const MyAppRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/homeads" element={<Ads/>}/>
                <Route path="/homeads/1" element={<AdsDetails/>}/>
            </Route>
        </Routes>
    );
};

export default MyAppRoute;