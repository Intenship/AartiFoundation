import React from "react";
import "./ContactUs.css";
import { Link } from 'react-router-dom';
const ContactUs = () => {
    return (
        <>
        <div className="contact-container">
            <h2 className="contact-header">Get in Touch</h2>
            <p className="contact-intro">
                We’d love to hear from you! Feel free to reach out via any of the methods below.
            </p>

            {/* Contact Details Section */}
            <div className="contact-details">
                <div className="contact-info">
                    <h3>Contact Details</h3>
                    <p>
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <strong>Address 1:</strong> At-post Phede, Pharshi, Near Cement Kamdhenu,
                        Chiplun, Ratnagiri
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <strong>Address 2:</strong> At-post Malghar, Gurukul High School
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info.ansfoundation@gmail.com">info.ansfoundation@gmail.com</a>
                    </p>
                    <p>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+919373332947">7666686643, 9834583028, 9730012988, 8779529843</a>
                    </p>
                </div>

                {/* Social Media Section */}
                <div className="contact-social">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media:</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://youtube.com/@amolnarkar8107?si=x-UUBItCu9Sua8sk" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
                <h3>Find Us</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61092.752376919234!2d73.531342!3d17.532319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc22530e70e4ff1%3A0x432d6dd5fa0d4394!2sChiplun%2C%20Phede%2C%20Pharshi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695120125125&markers=color:red%7C17.532319,73.531342"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map with Marker"
                ></iframe>
            </div>

             
        </div>
         {/* Donate Now Button */}
        <Link to="/donation">
                <button className="donate-button">DONATE NOW</button>
            </Link>
        </>
    );
};

export default ContactUs;
