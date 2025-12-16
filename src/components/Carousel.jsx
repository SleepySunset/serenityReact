import { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/introduction.jpg",
    "/img/introduction1.jpg",
    "/img/introduction2.jpg",
    "/img/introduction3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Carousel;
