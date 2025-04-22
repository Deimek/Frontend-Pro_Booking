import React from "react";
import { Link } from "react-router-dom";
import './style-header.scss'
import { menuItems } from '../../routers/routers.js';


const Header = () => {


    return (

        <div className="header-content">
            <h1>SPA — header</h1>
            <nav className="nav__header">
                {menuItems.map(({ link, caption }) => <Link key={link} to={link}>{caption}</Link>)}
            </nav>

        </div>




    )
}

export default Header;