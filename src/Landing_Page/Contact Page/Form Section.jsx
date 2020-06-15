import React from "react";

export default function Form_Section() {
    return (
        <form action = "mailto: hsr205@aol.com">
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp"></input>
            </div>
                <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"></input>
            </div>
                <div className="form-group">
                <label>Phone #</label>
                <input type="password" className="form-control"></input>
            </div>
                <div className="form-group">
                <label>What can BlaxBaum help you with?</label>
                <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className = "contact-submit">
                <a href = "mailto:hsr205@aol.com,gavblaxberg@gmail.com,bkestenbaum01@gmail.com"><button type="button" className="btn btn-light">Submit</button></a>
            </div>
        </form>
    );
}
