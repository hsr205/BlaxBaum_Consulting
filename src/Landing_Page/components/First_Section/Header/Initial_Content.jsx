import React from "react";

export default function Initial_Content () {
    return (
        <div col-md-6 col-sm-12>
            <h1>"By Failing to Prepare, You Are Preparing For Failure"</h1>
            <p className = "b-franklin">- Benjamin Franklin</p>
            <p className = "content-img-paragraph">BlaxBaum Consulting is where student success begins. Land your dream internship, enhance your academic prowess, and build your financial literacy in a matter of hours. </p>
            <a onclick={ ()=> this.props.view("contact-page") }><button type="button" class="btn btn-dark btn-sm">Request a Consultation</button></a>
            <a onclick={ ()=> this.props.view("contact-page") }><button type="button" class="btn btn-light btn-sm">Services for Students</button></a>
        </div>
    );
}

