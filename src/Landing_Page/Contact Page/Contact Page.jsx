import React from "react";
import First_Section_Contacts from "./Contact Page All Sections";
import Header_Content from "../components/First_Section/Header/Header Contents";

export default function Contact_Page_Header() {
    return ( 
    <div className = "contact-page">
        <header className = "contact-header">
            <div className = "resume-writing-page">
                <div className = "container">
                    <div className = "row">
                        <div className = "col">
                            <header>            
                                <nav className="navbar fade_scroll header_nav navbar-expand-md navbar-dark">
                                    <Header_Content/>
                                </nav>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className = "contacts-first-section"><First_Section_Contacts/></div>
    </div>
    );
}


{/* <button onClick={() => this.props.setView("contact-page")}>Button</button> */}
