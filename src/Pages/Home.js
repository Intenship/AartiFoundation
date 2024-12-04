import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            src: "/images/certificate/1.png",
            alt: "Certificate 1",
            name: "Certificate of CSR",
        },
        {
            src: "/images/certificate/3.png",
            alt: "Certificate 2",
            name: "Certifcate of ATG",
        },
        {
            src: "/images/certificate/4.png",
            alt: "Certificate 3",
            name: "Certifcate of 12 ATG,"
        },
    ];

    return (
        <>
            {/* Carousel Section */}
            <div id="carouselExampleCaptions" className="carousel slide">
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                {/* Carousel Items */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/home/1.jpeg" className="d-block w-100" alt="Supporting the Elderly" style={{ height: "10cm", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Empowering Senior Citizens</h5>
                            <p>Join us in supporting the elderly with care, dignity, and companionship through our Old Age Foundation.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/2.jpeg" className="d-block w-100" alt="Orphanage Foundation" style={{ height: "10cm", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hope for Orphaned Children</h5>
                            <p>Help provide shelter, education, and a brighter future for children in need through our Orphanage Foundation.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home/3.jpeg" className="d-block w-100" alt="Community Care Initiatives" style={{ height: "10cm", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Building Stronger Communities</h5>
                            <p>Be a part of our mission to create a nurturing and caring environment for those who need it most.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Banner Section */}
            <div className="banner">
                <h2 className="banner-heading">Together, We Can Make a Difference</h2>
                <p className="banner-text">
                    Supporting orphaned children, empowering elderly people, and uplifting women in need. Join hands with us to spread hope, care, and love. Together, we create brighter tomorrows for those who need it most.
                </p>
            </div>

            {/* Certificates Section */}
            <div className="certificates-section">
                <h3 className="certificates-heading">Our Recognitions</h3>
                <div className="certificates">
                    {certificates.map((certificate, index) => (
                        <div className="certificate-card" key={index} onClick={() => setSelectedCertificate(certificate)}>
                            <img src={certificate.src} alt={certificate.alt} className="certificate-img" />
                            <p className="certificate-name">{certificate.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Certificate */}
            {selectedCertificate && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedCertificate.name}</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedCertificate(null)}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img src={selectedCertificate.src} alt={selectedCertificate.alt} className="img-fluid" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setSelectedCertificate(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
