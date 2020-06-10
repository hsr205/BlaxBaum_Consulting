import React from "react";


export default function Side_Divs () {
    return (
        <div>
             <div className = "side-div container">
                <div className = "row">
                    <div className = "col">
                        <div>
                            <h4 className = "side-div-text-header">Why Us</h4>
                            <p className = "side-div-text font-weight-bold">
                            • We’re Experts! ResumeSpice was developed by recruiters.
                            </p>
                            <p className = "side-div-text font-weight-bold">
                            • We’re Fast! Speedy, two-day turnaround.
                            </p>
                            <p className = "side-div-text font-weight-bold">
                            • We Guarantee Our Work! Not getting results? Let us know!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "side-div-bottom container">
                <div className = "row">
                    <div className = "col">
                        <div>
                            <h4 className = "side-div-text-bottom">Ready to Get Started</h4>
                            <button type="button" class="ready-btn btn btn-outline-light">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}