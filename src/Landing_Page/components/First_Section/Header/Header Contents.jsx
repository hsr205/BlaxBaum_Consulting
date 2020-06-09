import React from "react";
import Logo_Header from "./Logo_Header"

export default function Header_Content () {
    return (
    <div className="container">
            <Logo_Header/>
            <a className="navbar-brand" href="#">BlaxBaum Consulting</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
             <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Leadership">Leadership</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact Us">Contact Us</a>
                </li>
          </ul>
        </div>  
    </div>
    );
}