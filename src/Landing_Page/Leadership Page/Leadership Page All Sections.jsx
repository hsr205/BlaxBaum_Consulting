import React from "react";
import Footer from "../components/Footer/Footer";
import Gav_Blaxberg from "./Gav_Blaxberg";
import Ben_Kestenbaum from "./Ben_Kestenbaum";
import Henry_Rothenberg from "./Henry_Rothenberg";
import Third_Section from "../components/Third_Section/Third_Section";

const year = new Date().getFullYear();

export default function All_Sections_Leadership () {
    return (
                 <div className = "leadership-section">
                     <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12 leadership-text">
                           <p>BlaxBaum prides itself on the talent and diversity of its people. With many years of experience holding positions of various capacities within the business industry 
                          – backgrounds ranging from financial analysts to databasing and private equity managment – 
                          BlaxBaum’s multi-disciplinary approach will provide your firm with uniquely well-rounded methods toward operational development.</p>
                             </div>
                            </div>
                          </div>
                     <div>
                    <h2 className = "leadership-header">Leadership</h2>
                     <div className = "Personal-Sections"> 
                        <div className = "leadership-desc">
                            <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-12">
                                            <Gav_Blaxberg/>
                                            </div>
                                            <div class="col-lg-6 col-sm-12">
                                             <h3>Gav Blaxberg</h3>
                                             <p>Founder</p>
                                             <p>Phone: (908) 300-2373</p>
                                             <p>Email: <a href="mailto:"></a></p>
                                             <p><a href="https://www.linkedin.com/in/gavriel-blaxberg/">LinkedIn</a></p>
                                             <p>I am a Finance and Computer Science student with a passion for public and private investing. My interest in this field started in high school when I participated in a grade-wide six-month stock market simulation competition. 
                                             I won the competition, creating a 25% return on my portfolio, beating the S&P 500 by 13% in that time period. Inspired by this, I signed up for an AP Macro-Economics class and began to develop a love for investing. 
                                             During my senior year, I also ventured into Business Management, founding a hospitality services company that became popular within my community.</p>
                                             </div>
                                            <p>During my time at Drexel, I have been blessed with the opportunity to work in Accounting, Private Wealth Management, and Private Equity, learning new skills at each job. Most recently, I became the COO for WOLF, a revolutionary FinTech start-up created by Drexel students. 
                                            Additionally, I co-founded BlaxBaum Consulting which guides college and high school-aged entrepreneurs through the process of taking their businesses from conception to reality. 
                                            I also have taken on several leadership positions including Class President, Executive Ward Committee Official, Resident Assistant, and President of the Society of Security Analysts at Drexel. 
                                            I am passionate about investing and business management and am excited to utilize my diverse work background to find a full-time job when I graduate in 2021. My aim is to continue sharpening my skills so that I can be effective in what I do.</p>
                                            
                                         </div>
                                     </div>
                                </div>
                        </div>
                    
                        <div className = "Personal-Sections"> 
                        <div className = "leadership-desc">
                        <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-12">
                                                <Ben_Kestenbaum/>
                                            </div>
                                            <div class="col-lg-6 col-sm-12">
                                             <h3>Ben Kestenbaum</h3>
                                            <p>Founder</p>
                                            <p>Phone: (443) 680-4082</p>
                                            <p>Email: <a href="mailto:"></a></p>
                                            <p><a href="https://www.linkedin.com/in/benkestenbaum/">LinkedIn</a></p>
                                            <p>Finance, Business Analytics, and Data Science student with an unwavering desire to learn. 
                                            Areas of Interest: Algorithmic Trading, Consumer/Market Psychology, Financial Modeling, Financial Technology, Investment Research, Machine Learning/AI, Portfolio Optimization. 
                                            Experience using Bloomberg Terminal, FactSet, Python, MATLAB, Excel. </p>
                                            </div>
                                            </div>
                                        </div>
                                 </div>
                        
                        </div>
                                 <div className = "Personal-Sections"> 
                                    <div className = "leadership-desc">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-12">
                                                <Henry_Rothenberg/>
                                            </div>
                                            <div class="col-lg-6 col-sm-12">
                                        <h3>Henry Rothenberg</h3>
                                        <p>Code Jocky</p>
                                        <p>Phone: (914) 907-1116 </p>
                                        <p>Email: <a href="mailto:hsr205@aol.com">hsr205@aol.com</a></p>
                                        <p><a href="https://www.linkedin.com/in/henry-s-rothenberg/">LinkedIn</a></p>
                                        <p>I am a current college student aspiring to enter into the field of BI / Data Science. 
                                        In addition to relevant coursework, I have been educating myself through online courses to expand my knowledge and abilities. 
                                        It is because of my sheer curiosity and drive to learn and teach myself that I have developed the foundation skills needed to be in this field. I am looking to expand my understanding and to continue learn and enhancement my skills.</p>
                                        </div>
                                        <p>Skilled in Microsoft Excel, SQL, Data Management and Analytics. 
                                        Strong, Hard Working team player who is currently pursuing a Bachelor’s Degree in Management Information Systems / Business Analytics and a minor in Finance at Drexel University.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                        <div><Third_Section/></div>
                        <div><Footer/></div>
                    </div>
                
            
     </div>
    );
}