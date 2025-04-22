import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './style-header.scss'
import { menuItems } from '../../routers/routers.js';
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store.js";
import { setTheme } from "../../redux/slice/mainReducer.js";

const Header = () => {

    const theme = useSelector(state => state.interface.theme);
    const dispatch = useDispatch();

    useEffect(() => {

        const newStore = localStorage.getItem('storeBooking');
        if (newStore) {
            const parseNewStore = JSON.parse(newStore);

            if (parseNewStore.interface.theme) dispatch(setTheme(parseNewStore.interface.theme));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('storeBooking', JSON.stringify(store.getState()));
    }, [theme]);


    const changeTheme = () => {
        const newTheme = setTheme(theme === 'light' ? 'dark' : 'light');
        dispatch(newTheme);

    }
    const headerMenuItems = menuItems.filter((mi) => mi.isMenuItems);
    return (

        <div className="header-content">
            <div className="header-content__booking-container">
                <div className="header-content__booking-wrapper">
                    <div className="header-content__booking-icon"></div>
                    <div className="header-content__booking-title">Boooking</div>
                </div>
                <div className="header-content__booking-theme">
                    <button className="btn-theme" onClick={changeTheme}>{theme}</button>
                </div>
            </div>

            <nav className="header-content__nav-menu">
                {headerMenuItems.map(({ link, caption }) =>
                    <Link className="header-content__nav-menu-limk" key={link} to={link}>{caption}</Link>)}
            </nav>

        </div>




    )
}

export default Header;