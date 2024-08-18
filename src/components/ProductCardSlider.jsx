import React, { useState, useEffect } from 'react';

const ProductCardSlider = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - visibleCards + 1));
    };

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? products.length - visibleCards : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden px-4 sm:px-10 md:px-20">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
                {products.map((product, index) => (
                    <div key={index} className={`w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-2 sm:p-4`}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-36 sm:h-48 object-cover"
                            />
                            <div className="p-3 sm:p-4">
                                <h2 className="font-semibold text-base sm:text-lg">{product.name}</h2>
                                <p className="text-xs sm:text-sm text-gray-600">{product.description}</p>
                                <button className="mt-2 sm:mt-4 bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg z-10 text-sm sm:text-base"
                onClick={previousSlide}
            >
                &#10094;
            </button>

            <button
                className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg z-10 text-sm sm:text-base"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
};

export default ProductCardSlider;