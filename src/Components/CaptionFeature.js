import React from 'react';
import ImageUploader from './ImageUploader';

const CaptionFeature = () => {
  const balls = Array.from({ length: 100 });

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
          <ImageUploader />
          <button className='generator-button'>Generate Caption</button>
        </div>
          <div className='display-field'>Display the Caption here ...</div>
      </div>
    </div>
  )
}

export default CaptionFeature;
