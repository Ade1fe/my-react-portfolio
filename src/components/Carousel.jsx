import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} 
      className="carousel-image h-full w-full object-contain transform 
      transition duration-1000 
      hover:scale-125" 
      alt="/" />
      
    </div>
  );
};

export default Carousel;
