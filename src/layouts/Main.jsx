// import React from 'react';

import Home from "../pages/Home";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import NavigrationBar from "../pages/Shared/NavigrationBar";

const Main = () => {
    return (
        <div>
            <NavigrationBar></NavigrationBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;