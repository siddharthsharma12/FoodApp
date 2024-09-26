"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// slider Api for three banner image with text=================================>
const data = [
  {
    id: 1,
    title: "Your Flavor Adventure Starts Here",
    image: "/temporary/pizza.png",
  },
  {
    id: 2,
    title: "Let’s make like a pizza and get deep dish.",
    image: "/temporary/french.jpg",
  },
  {
    id: 3,
    title: "Mouthwatering Cheesy Delight",
    image: "/temporary/cold.avif",
  },
];
// slider Api for three banner image with text=================================>

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-gray-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-slate-500 font-bold">
        <h1 className="text-4xl text-center  p-4 md:p-10 md:text-4xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white rounded-3xl py-4 px-8">Hurry Up Order Now</button>
      </div>
      
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
          
        />
      </div>
    </div>
  );
};

export default Slider;
