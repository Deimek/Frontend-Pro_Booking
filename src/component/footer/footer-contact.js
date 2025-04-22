import React from "react";
import { Link, } from "react-router-dom";
import "./style-footer.scss"


const Footer = () => {


    return (
        <div className="footer-content">

            <Link className="footer-content__title" to="/about">Boooking.com</Link>

        </div>

    )


}

export default Footer;