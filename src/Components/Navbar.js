import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activelink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
        // Close the navbar toggle when a link is clicked
        const toggleButton = document.getElementById('navbarSupportedContent');
        if (toggleButton.classList.contains('show')) {
            toggleButton.classList.remove('show');
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{backgroundColor:"#7f7f7f"}}>
                <div className="container-fluid ml-5">
                    {/* Logo */}
                    <Link  onClick={() => handleClick('home')} style={{ color: activelink === 'home' ? 'blue' : 'black' }} to="/AartiFoundation">
                        <img
                            className="logo"
                            src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
                            alt="Logo"
                            style={{
                                width: "1.7cm",
                                height: "1.7cm",
                                borderRadius: "50%",
                                objectFit: "cover",
                                margin: "1px"
                            }}
                        />
                    </Link>

                    <h3 style={{ paddingLeft: "0.3cm" }}>Aarti Niradhar Foundation</h3>

                    {/* Toggler Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ gap: "40px", marginLeft: '2cm' }}>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={() => handleClick('home')} style={{ color: activelink === 'home' ? 'blue' : 'black' }} to="/AartiFoundation">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => handleClick('service')} style={{ color: activelink === 'service' ? 'blue' : 'black' }} to="/service">
                                    Our Work
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => handleClick('media')} style={{ color: activelink === 'media' ? 'blue' : 'black' }} to="/media">
                                    Media
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => handleClick('aboutus')} style={{ color: activelink === 'aboutus' ? 'blue' : 'black' }} to="/aboutus">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => handleClick('contactus')} style={{ color: activelink === 'contactus' ? 'blue' : 'black' }} to="/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => handleClick('donation')} style={{ color: activelink === 'donation' ? 'blue' : 'black' }} to="/donation">
                                    Donation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
