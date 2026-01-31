import { Routes, Route } from "react-router"
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login";
import Ads from "../pages/Ads";
import AdsDetails from "../pages/AdsDetails";

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