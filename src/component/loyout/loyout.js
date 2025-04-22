import React from "react";
import Header from "../header/header-content.js";
import Footer from "../footer/footer-contact.js";
// import Main from "../main/main.js";
import "./loyout.scss";
import { Outlet } from "react-router-dom";


const Loyout = () => {


    return (<>
        <div className="loyout">
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>

    </>
    )


}
export default Loyout;