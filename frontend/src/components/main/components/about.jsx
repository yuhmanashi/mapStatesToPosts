import React, { useRef, useState, useEffect } from "react";
import "../stylesheets/about.scss";
import DarkBlue from "./svgs/dark-blue.jsx";
import Yellow from "./svgs/yellow.jsx";
import LightGrey from "./svgs/light-grey.jsx";
import DarkGrey from "./svgs/dark-grey.jsx";
import Cart from "./svgs/cart.jsx";
import Tools from "./svgs/tools.jsx";
import RocksOne from "./svgs/rocks-one.jsx";
import RocksTwo from "./svgs/rocks-two.jsx";
import RocksThree from "./svgs/rocks-three.jsx";


function About() {
  return (
    <>
      <div className='cart-left-right'/>
      <div className='about-cart-container'>
      <div className="about-asset-cart">
        <Cart />
      </div>
      <div className="about-asset-cart">
        <RocksOne />
      </div>
      <div className="about-asset-cart">
        <RocksTwo />
      </div>
      <div className="about-asset-cart">
        <RocksThree />
      </div>
      </div>
      <div className="about-contents-container">
        <div className="about-left">
          <div className="about-item">
            <h5>We here at mSTP wants you to go on </h5>
            <h5>a Road Trip across the States to: </h5>

            <h5 className="bold">["Let Go",</h5>
            <h5 className="bold">"See More of Your Country",</h5>
            <h5 className="bold">"Meet New People",</h5>
            <h5 className="bold">"Make Some Unforgettable Memories,"</h5>
            <h5 className="bold">"Receive an Appreciation for Life"]</h5>

          </div>
        </div>
        <div className="about-right">
          <h2>Technologies Used</h2>
         <h1></h1>

          <div className="about-item-icons">
            <div className="about-icon-row">
              <div className="about-icon-item">
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-express-original-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-react-original-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-nodejs-plain-wordmark"></i>
              </div>
            </div>
            <div className="about-icon-row">
              <div className="about-icon-item"></div>
              <div className="about-icon-item">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-redux-original"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-html5-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-css3-plain-wordmark"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="about-asset">
        <DarkBlue />
      </div>
      <div className="about-asset">
        <Tools />
      </div>
      <div className="about-asset">
        <Yellow />
      </div>
      <div className="about-asset">
        <LightGrey />
      </div>
      <div className="about-asset">
        <DarkGrey />
      </div>
      <div className="about-asset-bg" />
      <div className='cart-left-right'/>

    </>
  );
}

export default About;
