import React from "react";
import "./OurWork.css";

const services = [
  {
    title: "Old Age Room",
    description:
      "Providing safe and comfortable living spaces for elderly individuals who need care and support.",
    image: "/images/ourwork/oldageroom.jpeg",
  },
  {
    title: "Care for Special Needs",
    description:
      "Supporting mentally unstable individuals and special needs children with dedicated care and attention.",
    image: "/images/ourwork/careforneedsone.jpeg",
  },
  {
    title: "Support for Women",
    description:
      "Helping women in need with shelter, resources, and opportunities for a better life.",
    image: "/images/ourwork/suppotWomen.jpeg",
  },
  {
    title: "Marriage Bureau",
    description:
      "Arranging marriages and providing a platform for suitable matches through our marriage bureau.",
    image: "/images/ourwork/suppotWomen.jpeg",
  },
  {
    title: "Family Consultancy",
    description:
      "Solving family issues with professional advice and consultancy to strengthen relationships.",
    image: "/images/ourwork/family.jpeg",
  },
  {
    title: "Diwali & Other Snacks Preparation",
    description:
      "Making traditional snacks such as chakli, ladoos, papad and other festive foods.",
    image: "/images/ourwork/snack.jpeg",
  },
  {
    title: "Community Mess Services",
    description:
      "Providing affordable and nutritious meals to the community through our mess services.",
    image: "/images/ourwork/Mess.jpeg",
  },
  {
    title: "IQ Testing",
    description:
      "Conducting IQ tests to assess and support cognitive development in individuals.",
    image: "/images/ourwork/IQ.jpeg",
  },
  {
    title: "Fashion Design Classes",
    description:
      "Offering fashion design classes to empower individuals with creative skills.",
    image: "/images/img1.jpg",
  },
  {
    title: "Physiotherapy",
    description:
      "Providing physiotherapy services to improve mobility and enhance physical well-being.",
    image: "/images/ourwork/physitherory.jpeg",
  },
];

const OurWork = () => {
  return (
    <div className="our-work-page">
      <h1 className="our-work-title">Our Work</h1>
      <p className="our-work-intro">
        At Aarti Niradhar Foundation, we are dedicated to providing various
        services that bring meaningful change to people's lives. Explore the
        work we do to make a difference in our community.
      </p>
      <div className="work-grid">
        {services.map((service, index) => (
          <div key={index} className="work-card">
            <img
              src={service.image}
              alt={service.title}
              className="work-image"
            />
            <h3 className="work-title" style={{ fontWeight: "bold" }}>{service.title}</h3>
            <p className="work-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
