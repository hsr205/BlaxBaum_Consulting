import React from "react";
import Footer from "../components/Footer/Footer";
import Form_Section from "./Form Section";


const year = new Date().getFullYear();

export default function All_Sections_Contacts () {
    return (
    
        
            <div className="row">
                <div className="col">
                    <div className = "contact-section">
                        <h1 className = "header-contact">Contact Us By Email</h1>
                        <hr className = "hr-contacts"/>
                        <div className = "col contact-text">
                            <p>BlaxBaum's consultants are readily available to provide more information, to answer any questions, and to 
                            create the most effective solutions for your firm’s current and future needs.</p>
                            <p>To start the process, fill out our contact form or schedule a consultation for a 
                            time that’s convenient for you. We look forward to hearing from you.</p>
                        </div>
                        <div className = "col-lg-10 col-sm-9 form-section"><Form_Section/></div>
                        <div ><Footer/></div>
                    </div>
                
            </div>
        </div>
    );
}