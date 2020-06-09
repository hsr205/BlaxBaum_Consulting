import React from "react";
import First_Section_Contacts from "./Contact Page All Sections";
import Header_Content from "../components/First_Section/Header/Header Contents";

export default function Contact_Page_Header() {
    return ( 
    <div className = "contact-page">
        <header className = "contact-header">
         <nav class="navbar navbar-contacts fade_scroll header_nav navbar-expand-md navbar-dark">
            <Header_Content/>
         </nav>
        </header>
        <div className = "contacts-first-section"><First_Section_Contacts/></div>
    </div>
    );
}


{/* <button onClick={() => this.props.setView("contact-page")}>Button</button> */}
