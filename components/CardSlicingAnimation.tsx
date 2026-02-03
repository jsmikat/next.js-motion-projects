"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { DashboardCard } from "./supportingComponents/DashboardCard";

const SLICE_COUNT = 10;

export default function PrismAnimation() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[600px] w-full max-w-5xl items-center justify-center overflow-hidden"
    >
      {[...Array(SLICE_COUNT)].map((_, i) => (
        <Slice key={i} index={i} total={SLICE_COUNT} isInView={isInView} />
      ))}
    </div>
  );
}

const Slice = ({
  index,
  total,
  isInView,
}: {
  index: number;
  total: number;
  isInView: boolean;
}) => {
  const widthPercentage = 100 / total;
  const clipPath = `inset(0% ${100 - (index + 1) * widthPercentage}% 0% ${index * widthPercentage}%)`;

  const halfPoint = total / 2;
  const distanceFromEdge = index < halfPoint ? index + 1 : total - index;
  const initialY = distanceFromEdge * 80;
  const delayOffset = index < halfPoint ? index : total - 1 - index;
  const animationDelay = delayOffset * 0.08;

  return (
    <motion.div
      className="pointer-events-none absolute left-0 top-0 flex size-full items-center justify-center"
      style={{
        clipPath,
        willChange: "transform",
      }}
      initial={{
        y: initialY,
        filter: "brightness(0.5)",
      }}
      animate={
        isInView
          ? {
              y: 0,
              filter: "brightness(1)",
            }
          : {}
      }
      transition={{
        duration: 1.8,
        ease: [0.25, 1, 0.5, 1],
        delay: animationDelay,
      }}
    >
      <div className="w-full px-4">
        <DashboardCard />
      </div>
      {index !== 0 && (
        <motion.div
          className="absolute inset-y-0 z-50 w-px bg-white/20"
          style={{
            left: `${index * widthPercentage}%`,
          }}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 0 } : {}}
          transition={{
            duration: 1.6,
            ease: [0.25, 1, 0.5, 1],
            delay: animationDelay,
          }}
        />
      )}
    </motion.div>
  );
};
