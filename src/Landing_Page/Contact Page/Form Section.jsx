import React from "react";

export default function Form_Section() {
    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Phone #</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">What can BlaxBaum help you with?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className = "contact-submit">
                <button type="button" className="btn btn-light">Submit</button>
            </div>
        </form>
    );
}
