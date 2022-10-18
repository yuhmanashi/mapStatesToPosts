import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Splash from './components/splash.jsx'
import About from './components/about.jsx'
import Features from './components/features.jsx'
import NavBar from './components/navbar.jsx'
import LoginFormContainer from '../session/login_form_container';

import Button from "@mui/material/Button";
import './stylesheets/reset.css';
import './stylesheets/main.css';


class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.openSignupForm = this.openSignupForm.bind(this)
  }

  openLoginForm(){
    this.props.openModal('login');
  }

  openSignupForm(){
    this.props.openModal('signup');
  }

  render() {
    return (
      <div className="main-index">
        <NavBar />
        <div className="App">
          <div className='main-1'>
            <Splash/>
          </div>
          <div className='main-1-5'>
            <About/>
          </div>
          <div className='main-2'>
            <Features/>
          </div>
        </div>
      </div>

    );
  }
}

export default MainPage;