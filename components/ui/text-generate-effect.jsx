"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  details,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const detailsArray = (details || "").split(" ");
  useEffect(() => {
    if (!scope.current) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration, scope]);

  const renderDetails = () => {
    return (
      <motion.div ref={scope}>
        {detailsArray.map((detail, idx) => {
          return (
            <motion.span
              key={detail + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {detail}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className="my-5 leading-7 tracking-wide">
          {renderDetails()}
        </div>
      </div>
    </div>
  );
};
