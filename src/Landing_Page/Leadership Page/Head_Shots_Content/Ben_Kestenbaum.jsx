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
                    <p className = "personal-par">Gavriel Blaxberg is a senior at Drexel University majoring in Finance and minoring in Computer Science. 
                    He is currently on track to graduate early, summa cum laude, with honors distinction. He has recent in-depth experience working analyst roles in both Private Equity and Private Wealth Management at notable firms including Versa Capital Management and Goldman Sachs. 
                    During these periods he assisted in the collective management of over six billion dollars of assets and played a key liaison role between the firm and multiple portfolio companies. 
                    Gavriel utilizes a unique combination of resume development and employer relation skills to create value for BlaxBaum Consulting and be an integral part of the team. </p>
                 </div>
                 </div>
        </div>
    );
}