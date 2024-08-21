import React, { useState } from 'react';

function ImageUploader({ setImage }) {  // Receive setImage as a prop
  const [image, setLocalImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLocalImage(imageUrl);
      setImage(file);  // Notify parent component about the image upload
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageUploader;
