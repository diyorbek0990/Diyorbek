import React from "react";

import './Navbar.css';

import myrasm from '../../assets/BMW.svg.png'

const NavbarContainer=()=>{
    return(
        <div className="navbar">
            <ul>
                <img className="img" src={myrasm} alt="bmw" />
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
    )
}

export default NavbarContainer;