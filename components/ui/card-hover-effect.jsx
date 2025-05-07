"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const gridVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={gridVariant}
      viewport={{ once: true }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}>
      {items.map((item, idx) => (
        <motion.div key={item?.link || idx} variants={imageVariants}>
          <Link
            target="_blank"
            href={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <h2 className="card-title">
                <div className="badge badge-success">{item.language}</div>
              </h2>
            </Card>
            <div className="card-actions absolute bottom-5 z-50 right-4">
              <div className="badge badge-outline">live</div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-base-100 dark:bg-base-content border relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <h4 className={cn("font-bold tracking-wide", className)}>{children}</h4>
      <FaCode />
    </div>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "my-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}>
      {children}
    </p>
  );
};
