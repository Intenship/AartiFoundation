import React, { useState } from "react";
import "./Media.css";

const Media = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const imageCategories = {
    "Activity Section": [
      "/images/Media/act/1.jpeg",
      "/images/Media/act/2.jpeg",
      "/images/Media/act/3.jpeg",
      "/images/Media/act/4.jpeg",
      "/images/Media/act/5.jpeg",
      "/images/Media/act/6.jpeg",
     
    ],
    "Health Check-up Section": [
      "/images/Media/health/1.jpeg",
      "/images/Media/health/4.jpeg",
      "/images/Media/health/3.jpeg",
  
      "/images/Media/6.jpeg",
    ],
    Function: [
      "/images/Media/func/1.jpeg",
      "/images/Media/func/3.jpeg",
      "/images/Media/func/10.jpeg",
      "/images/Media/func/11.jpeg",
      "/images/Media/func/12.jpeg",
      "/images/Media/func/5.jpeg",
    ],
    Physiotherapy: [
      "/images/Media/2.jpeg",
      "/images/Media/13.jpeg",
      "/images/Media/14.jpeg",
      "/images/Media/physo/1.jpeg",
     
    ],
    Trip: [
      "/images/Media/trip/1.jpeg",
      "/images/Media/trip/2.jpeg",
      "/images/Media/trip/3.jpeg",
    ],
    Others: [
      "/images/Media/other/17.jpeg",
      "/images/Media/other/18.jpeg",
      "/images/Media/other/20.jpeg",
      "/images/Media/other/21.jpeg",
      "/images/Media/other/22.jpeg",
      "/images/Media/other/15.jpeg",
    ],
  };

  const openModal = (category, index) => {
    setSelectedCategory(category);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedCategory("");
    setSelectedIndex(null);
  };

  const previousImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imageCategories[selectedCategory].length - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < imageCategories[selectedCategory].length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="media-container">
      {Object.entries(imageCategories).map(([category, images]) => (
        <div key={category} className="media-section">
          <h2 className="media-section-title">{category}</h2>
          <div className="media-row">
            {images.map((image, index) => (
              <div
                key={index}
                className="media-item"
                onClick={() => openModal(category, index)}
              >
                <img src={image} alt={`${category} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <button className="prev-button" onClick={previousImage}>
              &lt;
            </button>
            <img
              src={imageCategories[selectedCategory][selectedIndex]}
              alt={`${selectedCategory} ${selectedIndex + 1}`}
              className="modal-image"
            />
            <button className="next-button" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
