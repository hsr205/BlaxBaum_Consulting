import React from "react";
import Landing_Page from "./Landing_Page";
import Contact_Page from "../Contact Page/Contact Page";
import Contacts from "../Contact Page/Contacts";
import Leadership_Page from "../Leadership Page/Leadership Page";
import Leadership from "../Leadership Page/Leadership";
import Career_Coaching from "../Features_Pages/Career_Coaching/Features - Career_Coaching"
import Cover_Letter from "../Features_Pages/Cover_Letter/Features - Cover_Letter_Writing";
import Resume_Writing from "../Features_Pages/Resume_Page/Features - Resume_Writing";
import Interview_Preparation from "../Features_Pages/Interview_Preparation/Features - Interview_Preparation";
import LinkedIn_Profile from "../Features_Pages/LinkedIn_Profile/Features - LinkedIn_Profile_Writing";
import Thank_You_Letter from "../Features_Pages/Thank_You_Letter/Features - Thank_You_Letter_Writing";
import { render } from "@testing-library/react";


export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          view : "contact-page",
      }
      this.setView = this.setView.bind(this)
  }

  setView (name) {
    this.setState({view : name});
  }


  render() {
    if (this.state.view === "landing-page") {
      return <Landing_Page view={this.setView}/>
      
    } else if (this.state.view === "contacts") {
      return <Contacts view={this.setView}/>

    } else if (this.state.view === "contact-page") {
      return <Contact_Page view={this.setView}/>

    } else if (this.state.view === "leadership") {
      return <Leadership view={this.setView}/>

    } else if (this.state.view === "leadership-page") {
      return <Leadership_Page view={this.setView}/>

    } else if (this.state.view === "features-career-coaching") {
      return <Career_Coaching view={this.setView}/>

    } else if (this.state.view === "features-cover-letter") {
      return <Cover_Letter view={this.setView}/>

    } else if (this.state.view === "features-resume-writing") {
      return <Resume_Writing view={this.setView}/>

    } else if (this.state.view === "features-interview-prep") {
      return <Interview_Preparation view={this.setView}/>

    } else if (this.state.view === "features-linkedin-profile") {
      return <LinkedIn_Profile view={this.setView}/>

    } else if (this.state.view === "features-thank-you-letter") {
      return <Thank_You_Letter view={this.setView}/>
    }
  }
};