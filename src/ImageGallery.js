import React, {useState} from "react";
import "./ImageGallery.css";

function ImageGallery({images}) {
  // Initial image is the first one in the array
  const [currentImage, setCurrentImage] = useState(images[0].url);

  // Handle click on a thumbnail
  const handleClick = (image) => {
    setCurrentImage(image.url);
  };

  return (
    <div className="imageGallery__container">
      <div>
        <img
          className="imageGallery__current"
          src={currentImage}
          alt="Current"
        />
      </div>
      <div className="imageGallery__list">
        {images.map((image, index) => (
          <img
            className="imageGallery__thumbnail"
            key={image.id}
            src={image.url}
            alt="Thumbnail"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      {/* <div>
        <img src={Cat} alt="" />
      </div> */}
    </div>
  );
}

export default ImageGallery;
