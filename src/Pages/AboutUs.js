import React from "react";
import "./AboutUs.css";
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <>
    <div className="about-us-card">
      <div className="about-us-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
          alt="Aarti Niradhar Foundation"
          className="about-us-image"
        />
      </div>
      <div className="about-us-text">
        <h1 className="about-us-title">Aarti Niradhar Foundation</h1>
        <p className="about-us-description">
          Established on <strong>21st January 2018</strong> by 
          <strong> Anita Atmaram Narkar</strong>, Aarti Niradhar Foundation is a 
          non-profit organization dedicated to providing care and support to the 
          elderly and mentally unstable individuals. Our mission is to ensure 
          dignity, comfort, and quality of life for all our residents.
        </p>
        <p className="about-us-description">
          We provide <strong>safe living spaces</strong>, nutritious meals, and 
          recreational activities that promote well-being and happiness. 
        </p>
        <p className="about-us-donation">
          As a part of our operations, we accept donations and service fees to 
          cover living, food, and care expenses. Your contributions help us 
          sustain and improve the quality of services we provide to those in need.
        </p>
      </div>
    </div>

           {/* Donate Now Button */}
           <Link to="/donation">
                <button className="donate-button">DONATE NOW</button>
            </Link>
    </>
    
  );
};

export default AboutUs;
