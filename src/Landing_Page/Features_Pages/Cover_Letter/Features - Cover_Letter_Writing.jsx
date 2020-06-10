import React from "react";
import Header_Contents from "../../components/First_Section/Header/Header Contents";
import Price_Tiles from "../Career_Coaching/Price_Tiles";
import Side_Divs from "../Career_Coaching/Side_Divs";
import Blurb_Box from "../Career_Coaching/Initial_Blurb";
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
                        <h1 className = "career-coaching-header">Cover Letter Writing</h1>
                        </div>
                    </div>
                </div>
        </div>
        <div className = "Philadelphia-Img"></div>
        <Price_Tiles/>
        <Blurb_Box/>
        <Side_Divs/>
        <div className = "features-footer" ><Footer/></div>
    </div>
    );
}