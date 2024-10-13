"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Review {
  name: string;
  role: string;
  image: string;
  stars: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Ray William",
    role: "Artist",
    image: "/assets/images/review1.jpg",
    stars: "/assets/images/Stars.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequi.",
  },
  {
    name: "Emily Ross",
    role: "Teacher",
    image: "/assets/images/review2.jpg",
    stars: "/assets/images/Stars.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequi.",
  },
  {
    name: "Jonah Wayne",
    role: "Professor",
    image: "/assets/images/review3.jpg",
    stars: "/assets/images/Stars.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequiLorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae recusandae ipsa earum sequi..",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allow dragging via mouse
  });

  // Auto-slide every 5 seconds if no interaction
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoSlide]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleMouseEnter = () => {
    setAutoSlide(false);
  };

  const handleMouseLeave = () => {
    setAutoSlide(true);
  };

  return (
    <div
      className="relative w-full max-w-[60%] pt-6 px-12 rounded-lg bg-white  mx-auto mt-[-12rem] cursor-pointer my-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Swipeable Container */}
      <div {...handlers} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 text-lg flex justify-center items-center text-center flex-col p-6 rounded-lg bg-white"
            >
              <Image
                src={review.image}
                alt={`${review.name} Profile Pic`}
                width={80}
                height={80}
                className="rounded-full select-none"
                style={{ height: "auto", width: "auto" }}
              />
              <h1 className="font-bold mt-6 select-none">{review.name}</h1>
              <h3 className="text-[#333] mb-4 select-none">{review.role}</h3>
              <Image
                src={review.stars}
                alt="Stars Rating"
                width={150}
                height={150}
                className="select-none"
                style={{ height: "auto", width: "auto" }}
              />
              <p className="text-[#333] tracking-tighter mt-8 select-none">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
