import React from "react";
import Logo_Header from "../components/First_Section/Header/Logo_Header";
import All_Sections_Leadership from "./Leadership Page All Sections";


export default function Leadership_Page () {
    return (
        <div className = "contact-page">
        <header className = "contact-header">
         <nav class="navbar navbar-contacts fade_scroll header_nav navbar-expand-md navbar-dark">
            <div class="container">
            <Logo_Header/>
             <a class="navbar-brand" href="#">BlaxBaum Consulting</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
              <span class="navbar-toggler-icon"></span>
         </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
             <ul class="navbar-nav ml-auto">
             <li class="nav-item">
                  <a class="nav-link" href="#About">About</a>
             </li>
             <li class="nav-item">
              <a class="nav-link" href="#Services">Services</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#Leadership">Leadership</a>
             </li>
             <li class="nav-item">
                  <a class="nav-link" href="#Contact Us">Contact Us</a>
             </li>
             </ul>
            </div>  
            </div>
         </nav>
        </header>
        <div className = "contacts-first-section"><All_Sections_Leadership/></div>
    </div>
    );
}