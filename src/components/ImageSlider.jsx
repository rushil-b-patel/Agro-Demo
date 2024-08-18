import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-slider relative h-screen w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={image}
                            alt={`Slider Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={previousImage}
                className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 bg-white text-black bg-opacity-70 hover:bg-opacity-100 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-10 text-sm md:text-base"
            >
                &#10094;
            </button>

            <button
                onClick={nextImage}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 bg-white text-black bg-opacity-70 hover:bg-opacity-100 px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-10 text-sm md:text-base"
            >
                &#10095;
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                            currentImageIndex === index ? 'bg-green-500' : 'bg-gray-300'
                        } focus:outline-none`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;