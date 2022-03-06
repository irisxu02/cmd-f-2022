import React from 'react';
import {NavLink} from 'react-router-dom';
import "./App.css"
import logo from './images/logo.jpg'

const TopNav = () => {
    return (
        <div className={"topnav"}>
            <a><img src={logo} className={"nav_logo"}/></a>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Events">Events</NavLink>
        </div>
    )
}

export default TopNav;