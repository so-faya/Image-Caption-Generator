import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import CaptionGenerator from './CaptionGenerator';

const CaptionFeature = () => {
  const balls = Array.from({ length: 100 });
  const [caption, setCaption] = useState("Display the Caption here ...");  // State to hold the caption
  const [image, setImage] = useState(null);  // State to hold the selected image

  // Function to handle setting the image from ImageUploader
  const handleImageUpload = (file) => {
    setImage(file);
    setCaption("this is a dummy caption.")
  };

  return (
    <div className='caption-feature'>
      {balls.map((_, index) => (
        <div 
          key={index} 
          className='bouncing-ball' 
          style={{ 
            backgroundColor: index % 2 === 0 ? '#fff' : '#ffd700',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 3}s`,
          }}
        ></div>
      ))}
      <div className='capfeature-container'>
        <h1>Image Caption Generator</h1>
        <div className='function-buttons'>
          <ImageUploader setImage={handleImageUpload} />
          <CaptionGenerator image={image} setCaption={setCaption} />
        </div>
        <div className='display-field'>{caption}</div>  {/* Caption displayed here*/}
      </div>
    </div>
  );
}

export default CaptionFeature;
