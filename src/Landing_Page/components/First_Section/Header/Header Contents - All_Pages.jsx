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
                <div className="dropdown">
                <button className="btn-landing btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    > About
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button"
                    onClick={() => this.props.view("main-page")}>• About</button>
                    </div>
                </div>
            </li>
            <li className="nav-item">
            <div className="dropdown">
                    <button className="btn-landing btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">• Resume Writing</button>
                    <button className="dropdown-item" type="button">• Interview Prep</button>
                    <button className="dropdown-item" type="button">• Cover Letter Writing</button>
                    <button className="dropdown-item" type="button">• LinkedIn Profile Writing</button>
                    <button className="dropdown-item" type="button">• Thank You Letter Writing</button>
                    <button className="dropdown-item" type="button">• Career Coaching</button>
                    </div>
            </div>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                    <button className="btn-landing btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Leadership
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button"
                        onClick={() => this.props.view("leadership-page")}>• Leadership</button>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                <button className="btn-landing btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Us
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">• Contact Us</button>
                    </div>
                </div>
            </li>
      </ul>
    </div>  
</div>
    );
}

