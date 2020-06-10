import React from "react";
import Header_Contents from "../../components/First_Section/Header/Header Contents";
import Blurb_Box_Cover_Letter from "./Blurb_Box";
import Side_Divs from "../Career_Coaching/Side_Divs";
import Footer from "/Users/HenryRothenberg/Desktop/BlaxBaum/blaxbaum_web/src/Landing_Page/components/Footer/Footer.jsx";

export default function Cover_Letter_Writing () {
    return (
    <div>
        <div className = "career-coaching-page">
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <header>            
                            <nav className="navbar fade_scroll header_nav navbar-expand-md navbar-dark">
                                <Header_Contents/>
                            </nav>
                        </header>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <div className = "career-coaching-div">
                        <h1 className = "career-coaching-header">Cover Letter Help</h1>
                        </div>
                    </div>
                </div>
        </div>
        <div className = "Philadelphia-Img"></div>
            <div className = "personalize-cover-div">
                <i class="fas career-image fa-copy fa-3x"></i>
            <h3 className="entry-level-header">Personalized Cover Letter - $0.00</h3>
            <p className="font-weight-bold entry-level-text">Let one of our career consultants write your cover letter. 
            This option includes a phone consultation with one of our professional cover letter experts, 
            a personalized draft of your cover letter turned around within two business days of your consultation, 
            two rounds of revisions, and a final draft of your personalized cover letter. Click here to get started!</p>
        </div>
        <Blurb_Box_Cover_Letter/>
        <Side_Divs/>
        <div className = "features-footer" ><Footer/></div>
    </div>
    );
}