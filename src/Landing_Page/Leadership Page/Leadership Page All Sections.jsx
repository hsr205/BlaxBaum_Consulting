import React from "react";
import Footer from "../components/Footer/Footer";
import Gav_Blaxberg from "./Head_Shots_Content/Gav_Blaxberg";
import Ben_Kestenbaum from "./Head_Shots_Content/Ben_Kestenbaum.jsx";
import Henry_Rothenberg from "./Head_Shots_Content/Henry_Rothenberg";
import Third_Section from "../components/Third_Section/Third_Section";

const year = new Date().getFullYear();

export default function All_Sections_Leadership () {
    return (
        <div className = "leadership-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 leadership-text">
                        <p>BlaxBaum Consulting prides itself on the talent and diversity of its people. With many years of experience holding positions of various capacities within the business industry 
                        – backgrounds ranging from financial analysts to databasing and private equity managment – 
                        BlaxBaum Consulting's multi-disciplinary approach will provide you a with uniquely well-rounded method to approach landing your dream position.</p>
                    </div>
                </div>
            </div>
                <div>
                    <h1 className = "leadership-header">Leadership</h1>
                        <div className = "Personal-Sections"> 
                        <div className="divider p-3 bg-dark text-white"><h4>Gav Blaxberg</h4></div>
                            <div className = "leadership-desc">
                                <Gav_Blaxberg/>
                            </div>
                        </div>
                        <div className = "Personal-Sections"> 
                        <div className="divider p-3 bg-dark text-white"><h4>Ben Kestenbaum</h4></div>
                            <div className = "leadership-desc">
                                <Ben_Kestenbaum/>
                            </div>
                        </div>
                        <div className = "Personal-Sections"> 
                        <div className="divider p-3 bg-dark text-white"><h4>Henry Rothenberg</h4></div>
                            <div className = "leadership-desc">
                                <Henry_Rothenberg/>
                            </div>
                        </div>
                        <div><Third_Section/></div>
                        <div><Footer/></div>
            </div>
     </div>
    );
}