import { useState } from "react";
import { useEffect } from "react";
import quotes from './TextCarousel.js'
import './TextCarousel.css';

function TextCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const update = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(update);
    }, [currentSlide]);

    const carouselItem = quotes.map(
        (item, index) => {
            const displayClass = index === currentSlide ? "currentSlide" : "hiddenSlide";
            return (
                <span key={index} className={`carousel-text ${displayClass}`}>
                    {item}
                </span>
            );
        }
    )

    return (
        <div className="text-carousel-holder">
            {carouselItem}
        </div>
    )

}

export default TextCarousel;