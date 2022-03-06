import React from 'react';
import {NavLink} from 'react-router-dom';
import "./App.css"
import logo from './logo.jpg'

const TopNav = () => {
    return (
        <div class={"topnav"}>
            <a><img src={logo} class={"nav_logo"}/></a>
            <a><NavLink to="/">Home</NavLink></a>
            <a><NavLink to="/Profile">Profile</NavLink></a>
            <a><NavLink to="/Events">Event</NavLink></a>
        </div>
    )
}

export default TopNav;