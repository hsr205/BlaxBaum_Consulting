import React from "react";
import Henry from "./Henry_Rothenberg.jpg";

export default function Henry_Rothenberg() {
    return (
        <div className="person-content container">
            <div className="row">
                <div className="col-lg-5">
                    <img className = "head-shots" src={Henry} alt="Henry_Rothenberg" />
                    </div>
                <div className="col-lg-6">
                    <p>Title Is Redering, Please Wait...</p>
                    <p>Phone: (914) 907-1116 </p>
                    <p>Email: <a href="mailto:hsr205@aol.com">hsr205@aol.com</a></p>
                    <p><a href="https://www.linkedin.com/in/henry-s-rothenberg/">LinkedIn</a></p>
                    <p className = "personal-par">I am a current college student aspiring to enter into the field of BI / Data Science. 
                    In addition to relevant coursework, I have been educating myself through online courses to expand my knowledge and abilities. 
                    It is because of my sheer curiosity and drive to learn and teach myself that I have developed the foundation skills needed to be in this field. 
                    I am looking to expand my understanding and to continue learn and enhancement my skills. Skilled in Microsoft Excel, SQL, Data Management and Analytics. 
                    Strong, Hard Working team player who is currently pursuing a Bachelor’s Degree in Management Information Systems / Business Analytics and a minor in Finance at Drexel University.</p>
                </div>
            </div>
        </div>

    );
}



