import React, { useState } from 'react';

function ImageUploader({ setCaption }) {  // Receive setCaption as a prop
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      
      if (typeof setCaption == 'function'){
        setCaption("This is a dummy caption.")
      }else{
        console.error("setCaption is not a function");
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageUploader;
