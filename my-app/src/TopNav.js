import React from 'react';
import {NavLink} from 'react-router-dom';
import "./App.css"

const TopNav = () => {
    return (
        <div>
            <NavLink
                to="/"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                Muster
            </NavLink>
            <NavLink
                to="/Profile"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                Profile
            </NavLink>
            <NavLink
                to="/Events"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
            >
                Event
            </NavLink>
        </div>
    )
}

export default TopNav;