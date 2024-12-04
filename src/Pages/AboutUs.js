import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-card">
      <div className="about-us-image-container">
        <img
          src="/images/logo.jpeg"
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
        <h2 className="about-us-contact-header">Contact Information</h2>
        <p className="about-us-contact">
          <strong>Address 1:</strong> At-post Phede, Pharshi, Near Cement Kamdhenu, 
          Chiplun, Ratnagiri <br />
          <strong>Address 2:</strong> At-post Malghar, Gurukul High School <br />
          <strong>Email:</strong> 
          <a href="mailto:info.ansfoundation@gmail.com"> info.ansfoundation@gmail.com</a> <br />
          <strong>Phone:</strong> 
          <a href="tel:+919373332947"> 7666686643, 9834583028, 9730012988 , 8779529843</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
