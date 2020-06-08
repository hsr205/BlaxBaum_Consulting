import React from "react";
import Logo from "./Logo_Regular";
import Logo_Header from "./Logo_Header"


export default function First_Section() {
    return (
  <div className = "landing-section">
      <div className = "initial-content">
    <header>
      <nav class="navbar fade_scroll header_nav navbar-expand-md navbar-dark">
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
        <div className = "container">
          <div class="row">
             <div className = "content-under-header">
                <div className = "col-lg-6 logo-reg"><Logo/></div>
                  <div col-md-6 col-sm-12>
                    <h1>Simplify Your Practice</h1>
                    <hr/>
                    <p className = "content-img-paragraph">BlaxBaum Consulting is where student success begins. Land your dream internship, enhance your academic prowess, and builds your financial literacy in a matter of hours. </p>
                    <hr/>
                    <a href=""><button type="button" class="btn btn-dark btn-sm">Request a Consultation</button></a>
                    <a href=""><button type="button" class="btn btn-light btn-sm">Services for Businesses</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}


