import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aspectRatio = 16 / 9; // Change this to match the aspect ratio of your images

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slide change every 5 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className={`relative w-full max-w-[95%] mx-auto aspect-w-${aspectRatio}`}>
      <div className={`overflow-hidden relative w-full h-full `}>
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 "
            >
              <img
                className="w-full h-full object-fill object-center shadow-md rounded-lg shadow-blue-600"
                src={image.url}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-4xl md:font-bold font-semibold" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-white text-4xl md:font-bold font-semibold"/>
      </button>  
    </div>
  );
};

export default ImageSlider;
