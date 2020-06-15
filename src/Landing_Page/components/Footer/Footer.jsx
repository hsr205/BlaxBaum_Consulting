import React from "react";
import Logo_Footer from "./Logo_Footer";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className = "footer">
            <div className="container">
                <div className="row">
                    <div className="col footer-contents">
                      <div className = "logo-footer"><Logo_Footer/></div>
                      <a href="https://www.linkedin.com/company/blaxbaumassociates/?viewAsMember=true"><i className="footer-icon fab fa-linkedin fa-2x"></i></a>
                      <a href="https://www.google.com/maps/place/Philadelphia,+PA/@40.0026767,-75.2581132,11z/data=!3m1!4b1!4m5!3m4!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215"><i className="footer-icon fab fa-google fa-2x"></i></a>
                      <a href="mailto:gavblaxberg@gmail.com,bkestenbaum01@gmail.com,hsr205@aol.com"><i className="footer-icon fas fa-envelope fa-2x"></i></a>
                      <p className = "copyright">ⓒ {year} BlaxBaum Consulting Group</p>
                    </div>
                </div>
            </div>
          </div>
      </footer>
    );
  }

