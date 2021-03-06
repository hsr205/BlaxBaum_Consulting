import React from "react";
import All_Sections_Leadership from "./Leadership Page All Sections";
import Header_Content from "../components/First_Section/Header/Header Contents - All_Pages";


export default function Leadership_Page () {
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
        <div className = "contacts-first-section"><All_Sections_Leadership/></div>
    </div>
    );
}