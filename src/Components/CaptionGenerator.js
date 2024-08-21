import React from 'react';

const CaptionGenerator = ({ image, setCaption }) => {
  const handleGenerateCaption = async () => {
    if (image) {
      try {
        // Dummy API response
        const dummyCaption = "This is a dummy caption for the uploaded image.";
        setCaption(dummyCaption);  // Update caption with dummy response
      } catch (error) {
        console.error('Error generating caption:', error);
        setCaption("Error generating caption. Please try again.");  // Handle errors
      }
    } else {
      setCaption("Please upload an image first.");
    }
  };

  return (
    <button className='generator-button' onClick={handleGenerateCaption}>
      Generate Caption
    </button>
  );
};

export default CaptionGenerator;
