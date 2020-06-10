import React from "react";

export default function Blurb_Box () {
    return (
        <div>
            <div className = "first-text-div">
            <p className = "first-text"><h4 class="font-weight-bold">A well-written, professional resume is an absolute must in today’s competitive job market.</h4>
            Whether you are applying for a position directly with a company, utilizing a third party recruiter, or being referred by a friend, your job search process will almost always involve submitting a resume. 
            ResumeSpice offers several options to fit the various needs of job seekers. Whether you have a resume and just need some quick, professional feedback or don’t have a resume and need someone to write one from scratch, ResumeSpice can help. 
            Below are the various resume options we offer. 
            We also offer a number of free resume resources in our career blog and sample resume section.</p>
        </div>
        <div className = "div-professional container">
                <div className = "row">
                    <div className = "col">
                        <div>
                            <h5 className = "div-professional-text">
                            Recruiters rank professionally written resumes 60% higher than those written by job seekers alone. 
                            (source: Forbes)
                            </h5>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
}