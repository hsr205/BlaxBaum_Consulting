import React from "react";


export default function Price_Tiles () {
    return (
    <div>
        <div className = "entry-level-div">
            <i className="fas career-image fa-user-tie fa-3x"></i>
            <h3 className="entry-level-header">Entry Level Resume - $0.00</h3>
            <p className="font-weight-bold entry-level-text">Select this option if you are a new graduate or if you have been in the workforce for under two years.</p>
            <p className="entry-level-text">This option includes a phone consultation with one of our professional resume experts, 
            a personalized draft of your resume turned around within two business days of your consultation, two rounds of revisions, 
            and a final draft of your personalized resume. 
            Click here to get started!</p>
        </div>

        <div className = "professional-level-div">
            <i className="fas career-image fa-user-tie fa-3x"></i>
            <h3 className="professional-level-header">Professional Level Resume - $0.00</h3>
            <p className="font-weight-bold professional-level-text">Select this option if you have been in the workforce for over two years and are looking to move up in your career, 
            enter a new field, or find a job that’s a better fit for you.</p>
            <p className="professional-level-text">This option includes a phone consultation with one of our professional resume experts, 
            a personalized draft of your resume turned around within two business days of your consultation, 
            two rounds of revisions, and a final draft of your personalized resume. 
            Click here to get started!</p>
        </div>

        <div className = "executive-level-div">
            <i className="fas career-image fa-user-tie fa-3x"></i>
            <h3 className="executive-level-header">Executive Level Resume - $0.00</h3>
            <p className="font-weight-bold executive-level-text">Select this option if you are in a C-level or executive position – 
            such as Marketing Director, President, CFO, CIO, VP, General Counsel – and/or seeking a role over $125K.</p>
            <p className="executive-level-text">This option includes a phone consultation with one of our professional resume experts, 
            a personalized draft of your resume turned around within two business days of your consultation, 
            two rounds of revisions, 
            and a final draft of your personalized resume. 
            Click here to get started!</p>
        </div>

    </div>
    );
}