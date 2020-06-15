import React from "react";

export default function Initial_Content () {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <h1>"By Failing to Prepare, You Are Preparing For Failure"</h1>
                    <p className = "b-franklin">- Benjamin Franklin</p>
                    <p className = "content-img-paragraph">BlaxBaum Consulting is where student success begins. Land your dream internship, enhance your academic prowess, and build your financial literacy in a matter of hours. </p>
                    <button type="button" className = "btn btn-dark btn-sm" onClick={() => this.props.view("contact-page")}>Request a Consultation</button>
                    <button type="button" className = "btn btn-light btn-sm" onClick={() => this.props.view("contact-page")}>Services for Students</button>
                </div>
            </div>
        </div>
    );
}
