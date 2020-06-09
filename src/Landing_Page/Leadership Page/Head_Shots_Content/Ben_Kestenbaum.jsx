import React from "react";
import Ben from "./Ben_Kestenbaum.jpg";

export default function Ben_Kestenbaum() {
    return (
        <div class="person-content container">
            <div class="row">
                <div class=" col-lg-5">
                    <img className = "head-shots" src={Ben} alt="Ben_Kestenbaum.jpg" />
                </div>
                    <div class="desc col-lg-6">
                        <p>Founder</p>
                        <p>Phone: (443) 680-4082</p>
                        <p>Email: <a href="mailto:"></a></p>
                        <p><a href="https://www.linkedin.com/in/benkestenbaum/">LinkedIn</a></p>
                        <p className = "personal-par">Finance, Business Analytics, and Data Science student with an unwavering desire to learn. 
                        Areas of Interest: Algorithmic Trading, Consumer/Market Psychology, Financial Modeling, Financial Technology, Investment Research, Machine Learning/AI, Portfolio Optimization. 
                        Experience using Bloomberg Terminal, FactSet, Python, MATLAB, Excel. </p>
                    </div>
                </div>
            </div>
    );
}

