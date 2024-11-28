"use client";

import React from "react";
import { InfiniteMovingTest } from "./ui/infinite-moving-test";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Testimonies() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/assets/fitlift.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/assets/fresh-burger.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/assets/viberr.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/assets/hipsster.png",
    },
  ];

  return (
    <div className="my-10">
      <h1 className="md:text-5xl text-center text-4xl font-extrabold mb-10">
        Testimonies
      </h1>
      <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10">
        <InfiniteMovingTest
          items={testimonies}
          direction="right"
          speed="slow"
        />
      </div>
      <div className=" hidden sm:flex">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

const testimonies = [
  {
    quote:
      "Working with Hadi Ademola has been an absolute pleasure! Their attention to detail, professionalism, and ability to bring our vision to life were exceptional. Highly recommend!",
    name: "Jane Doe",
    title: "CEO, Visionary Designs",
  },
  {
    quote:
      "The quality of Hadi's work exceeded our expectations. The final product was both visually stunning and highly functional. A true expert in their field!",
    name: "John Smith",
    title: "Project Manager, Tech Solutions",
  },
  {
    quote:
      "Timely delivery and clear communication made the entire process seamless. Hadi managed every detail with precision and professionalism.",
    name: "Emily Carter",
    title: "Founder, Creative Agency",
  },
  {
    quote:
      "We were impressed by Hadi Ademola's technical skills and innovative solutions. They took on complex challenges with ease and delivered exceptional results!",
    name: "Michael Johnson",
    title: "CTO, Innovative Tech",
  },
  {
    quote:
      "His creativity is unmatched! Hadi transformed our ideas into a modern, elegant design that perfectly aligned with our brand.",
    name: "Sarah Williams",
    title: "Marketing Lead, Brand Essentials",
  },
];
