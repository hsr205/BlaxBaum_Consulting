import React from "react";
import Ben from "./Ben_Kestenbaum.jpg";

export default function Gav_Blaxberg() {
    return (
        <div class="person-content container">
            <div class="row">
                <div class="col-lg-5">
                    <img className = "head-shots" src={Ben} alt="Gav_Blaxberg" />
                </div>
                <div class="col-lg-6">
                    <p>Founder</p>
                    <p>Phone: (908) 300-2273</p>
                    <p>Email: <a href="mailto:bkestenbaum01@gmail.com">bkestenbaum01@gmail.com</a></p>
                    <p><a href="https://www.linkedin.com/in/benkestenbaum/">LinkedIn</a></p>
                    <p className = "personal-par">Ben Kestenbaum is an undergraduate student pursuing degrees in Finance and Business Analytics with a minor in Data Science. 
                    Ben works as an analyst at JP Morgan, where he and his team manage a $250 billion global investment securities portfolio; 
                    Ben is also the Co-Founder and Head of Investment Research at WOLF Financial. 
                    He serves as the Vice President of DrexelAI, a Philadelphia based academic research group. </p>
                 </div>
                 </div>
        </div>
    );
}