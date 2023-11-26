// components/ImageSlider.js
import { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative">
      {images.map((src, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          src={src}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
