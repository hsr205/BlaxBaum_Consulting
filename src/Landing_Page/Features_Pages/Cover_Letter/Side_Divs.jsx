import React from "react";


export default function Side_Divs () {
    return (
        <div>
             <div className = "middle-divs float-right">
                <div className = "row">
                    <div className = "col-lg-8 why-us-div">
                            <h4 className = "why-us-div-text-header">Did You Know?</h4>
                            <h4 className = "why-us-div-text-header">The most common cover letter mistakes</h4>
                            <p className = "side-div-text font-weight-bold">
                            • Using a generic template.
                            </p>
                            <p className = "side-div-text font-weight-bold">
                            • Simply repeating your resume.
                            </p>
                            <p className = "side-div-text font-weight-bold">
                            • Not having one!
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}