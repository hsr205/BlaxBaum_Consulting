import React from "react";
import Logo from "./Logo_Regular";
import Initial_Content from "./Initial_Content"
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
              <div className = "col-lg-6 logo-regular">
                <Logo/>
              </div>
                <Initial_Content/>
            </div>
          </div>
        </div>
      </div>
   </div>
    );
}

