import React from "react";
import Gav from "./Gav_Blaxberg.jpg";

export default function Gav_Blaxberg() {
    return (
        <div class="person-content container">
            <div class="row">
                <div class="col-lg-5">
                    <img className = "head-shots" src={Gav} alt="Gav_Blaxberg" />
                </div>
                <div class="col-lg-6">
                    <p>Founder</p>
                    <p>Phone: (908) 300-2373</p>
                    <p>Email: <a href="mailto:"></a></p>
                    <p><a href="https://www.linkedin.com/in/gavriel-blaxberg/">LinkedIn</a></p>
                    <p className = "personal-par">I am a Finance and Computer Science student with a passion for public and private investing. My interest in this field started in high school when I participated in a grade-wide six-month stock market simulation competition. 
                    I won the competition, creating a 25% return on my portfolio, beating the S&P 500 by 13% in that time period. Inspired by this, I signed up for an AP Macro-Economics class and began to develop a love for investing. 
                    During my senior year, I also ventured into Business Management, founding a hospitality services company that became popular within my community.</p>
                </div>
                    <p className = "personal-par-bottom">During my time at Drexel, I have been blessed with the opportunity to work in Accounting, Private Wealth Management, and Private Equity, learning new skills at each job. Most recently, I became the COO for WOLF, a revolutionary FinTech start-up created by Drexel students. 
                    Additionally, I co-founded BlaxBaum Consulting which guides college and high school-aged entrepreneurs through the process of taking their businesses from conception to reality. 
                    I also have taken on several leadership positions including Class President, Executive Ward Committee Official, Resident Assistant, and President of the Society of Security Analysts at Drexel. 
                    I am passionate about investing and business management and am excited to utilize my diverse work background to find a full-time job when I graduate in 2021. My aim is to continue sharpening my skills so that I can be effective in what I do.</p>
                 </div>
        </div>
    );
}