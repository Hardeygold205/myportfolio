"use client"

import React from "react";
import { InfiniteMovingTest } from "./ui/infinite-moving-test";

export default function Testimonies() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10">
      <InfiniteMovingTest items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
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

