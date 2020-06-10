import React from "react";
import Landing_Page from "./Landing_Page";
import Contact_Page from "../Contact Page/Contact Page";
import Contacts from "../Contact Page/Contacts";
import Leadership_Page from "../Leadership Page/Leadership Page";
import Leadership from "../Leadership Page/Leadership";
import { render } from "@testing-library/react";


export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          view : "leadership-page",
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
    }
  }
};