import React, { useRef, useState, useEffect } from "react";
import "../stylesheets/features.scss";
import FeaturesWindowBackground from "./svgs/features-window-background.jsx";
import FeaturesWindowButtons from "./svgs/features-window-buttons.jsx";
import FeaturesWindowFrame from "./svgs/features-window-frame.jsx";
import FeaturesWindowFrameBack from "./svgs/features-window-frame-back.jsx";

function Features() {
  const [currentVideo, setCurrentVideo] = useState("default");

  const videos = {
    default: "https://deandingprojects.s3.us-east-2.amazonaws.com/default.mp4",
    explore: "https://deandingprojects.s3.us-east-2.amazonaws.com/default.mp4",
    create: "https://deandingprojects.s3.us-east-2.amazonaws.com/default.mp4",
    interact: "https://deandingprojects.s3.us-east-2.amazonaws.com/default.mp4",
  };

  return (
    <>
      <div className="features-header">
        <h1 onClick={() => setCurrentVideo("default")}>Features</h1>
      </div>
      <div className="features-container">
        <div className="features-left" id="features-left">
          <div className="features-left-left">
            <div className="feature-title">
              
            </div>
            <div className="video-window">
              <div className="video-container" id="video-container">
                <video
                  key={videos[currentVideo]}
                  autoPlay
                  loop
                  muted
                  preload="auto | metadata | none"
                  poster="https://tomleslieli-portfolio.s3.amazonaws.com/placeholder.png"
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                </video>
              </div>
              <div className="features-window" id="features-window-background">
                <FeaturesWindowBackground />
              </div>
              <div className="features-window" id="features-window-frame-back">
                <FeaturesWindowFrameBack />
              </div>
              <div className="features-window" id="features-window-frame">
                <FeaturesWindowFrame />
              </div>
              <div
                onClick={() => setCurrentVideo("rick")}
                className="features-window"
                id="features-window-button"
              >
                <FeaturesWindowButtons />
              </div>
            </div>
            <div className="video-demo-instructions">
              {currentVideo === "default" ? (
                <h6>Select a feature for a video demo.</h6>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="timeline-line">
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("explore")}
          />
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("create")}
          />
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("interact")}
          />
        </div>
        <div className="features-right">
          <div className="feature-container">
            <div className="feature-info">
              <h3 onClick={() => setCurrentVideo("explore")}>Explore new states</h3>
              <p>
                {" "}
                By clicking on each of the states on your personalized US maps, you are navigated to that state's show page to find your next desintation.
                {" "}
              </p>
              
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-info">
              <h3 onClick={() => setCurrentVideo("create")}>Create Posts & Photos</h3>
              <p>
                You can create a post and upload any photos you've taken during visit. Other users can comment and react to your travel.
              </p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-info">
              <h3 onClick={() => setCurrentVideo("interact")}>Interact with others</h3>
              <p>
                You can view each other's travel log page and comment on their journey across the states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
