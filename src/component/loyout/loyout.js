import React from "react";
import Header from "../header/header-content.js";
import Footer from "../footer/footer-contact.js";
import "./loyout.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Loyout = () => {

    const theme = useSelector(state => state.interface.theme);
    return (<>
        <div className={`loyout ${theme} `}>
            <Header />
            <div className="main-content container">
                <Outlet />
            </div>
            <Footer />
        </div>

    </>
    )


}
export default Loyout;