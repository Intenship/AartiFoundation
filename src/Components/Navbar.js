import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from './images/img1.jpg';
const Navbar = () => {
    const [activelink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{backgroundColor:"#7f7f7f"}}>
                <div className="container-fluid ml-5">
                    {/* Logo */}

                    <img
                        className="logo"
                        src="/images/logo.jpeg"
                        alt="Logo"
                        style={{
                            width: "1.7cm",
                            height: "1.7cm",
                            borderRadius: "50%",
                            objectFit: "cover",
                            margin: "1px"
                        }}
                    />

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
                                <Link className="nav-link active" onClick={() => handleClick('home')} style={{ color: activelink === 'home' ? 'blue' : 'black' }} to="/">
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
