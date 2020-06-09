import React from "react";
import Logo from "./Logo_Regular";

import Header_Contents from "./Header Contents"


export default function First_Section() {
    return (
  <div className = "landing-section">
      <div className = "initial-content">
    <header>
      <nav className="navbar fade_scroll header_nav navbar-expand-md navbar-dark">
          <Header_Contents/>
      </nav>
    </header>
        <div className = "container">
          <div class="row">
             <div className = "content-under-header">
                <div className = "col-lg-6 logo-regular"><Logo/></div>
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


