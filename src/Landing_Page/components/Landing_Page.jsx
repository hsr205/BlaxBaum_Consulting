import React from "react";
import First_Section from "./First_Section/Header/First-Section";
import Second_Section from "./Second_Section/Operations";
import Third_Section from "./Third_Section/Third_Section";
import Footer from "./Footer/Footer";

function Landing_Page() {
    return (
        <div>
          <First_Section/>
          <Second_Section/>
          <Third_Section/>
          <Footer/>
        </div>
    );
}

export default Landing_Page;