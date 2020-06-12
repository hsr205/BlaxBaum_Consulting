import React from "react";
import Header_Contents from "../../components/First_Section/Header/Header Contents - All_Pages";
import Price_Tiles from "./Price_Tiles";
import Side_Divs from "./Side_Divs";
import Blurb_Box from "./Blurb_Box"
import Footer from "/Users/HenryRothenberg/Desktop/BlaxBaum/blaxbaum_web/src/Landing_Page/components/Footer/Footer.jsx";


export default function Career_Coaching () {
    return (
    <div>
        <header>            
            <nav className="navbar fade_scroll header_nav navbar-expand-md navbar-dark">
                <Header_Contents/>
            </nav>
        </header>
        <div className = "career-coaching-page">
            <div className = "Philadelphia-Img">
                <h1 className = "career-coaching-header">
                    Career Coaching
                </h1>
            </div>
                <Blurb_Box/>
                <Side_Divs/>
                <Price_Tiles/>
            <div className = "features-footer" >
                <Footer/>
            </div>
        </div>
    </div>
    
    );
}

