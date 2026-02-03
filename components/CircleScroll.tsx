"use client";

import * as React from "react";

import { motion } from "motion/react";

interface CircleScrollProps {
  labels?: string[];
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
}

const defaultLabels = [
  "Start",
  "Plan",
  "Design",
  "Build",
  "Test",
  "Deploy",
  "Launch",
  "Scale",
];

export default function CircleScroll({
  labels = defaultLabels,
  activeColor = "#171717",
  inactiveColor = "#a3a3a3",
  size = 420,
}: CircleScrollProps) {
  const [rotation, setRotation] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isScrolling = React.useRef(false);
  const count = labels.length;
  const stepAngle = 360 / count;

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isScrolling.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 5) return;

      isScrolling.current = true;

      if (delta > 0) {
        setRotation((prev) => prev + stepAngle);
      } else {
        setRotation((prev) => prev - stepAngle);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 400);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [stepAngle]);

  const radius = size / 2 - 40;
  const currentIndex =
    ((Math.round(rotation / stepAngle) % count) + count) % count;

  const textItems = React.useMemo(() => {
    return labels.map((label, i) => {
      const angle = (i / count) * 360 - 90;
      const rad = angle * (Math.PI / 180);
      return {
        label,
        x: Math.cos(rad) * radius,
        y: Math.sin(rad) * radius,
        angle,
      };
    });
  }, [labels, count, radius]);

  return (
    <div
      ref={containerRef}
      className="flex size-full items-center justify-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ rotate: -rotation }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {textItems.map((item, i) => {
            const distance = Math.min(
              Math.abs(i - currentIndex),
              count - Math.abs(i - currentIndex)
            );
            const isActive = i === currentIndex;

            const handleClick = () => {
              const diff = i - currentIndex;
              const shortestPath =
                Math.abs(diff) <= count / 2
                  ? diff
                  : diff > 0
                    ? diff - count
                    : diff + count;
              setRotation((prev) => prev + shortestPath * stepAngle);
            };

            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer"
                style={{
                  left: "50%",
                  top: "50%",
                  x: item.x,
                  y: item.y,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                onClick={handleClick}
              >
                <motion.span
                  className="block whitespace-nowrap"
                  style={{
                    fontWeight: isActive ? 500 : 400,
                    fontSize: isActive ? 20 : 24,
                    letterSpacing: "0.02em",
                  }}
                  initial={false}
                  animate={{
                    rotate: rotation,
                    color: isActive ? activeColor : inactiveColor,
                    opacity: isActive ? 1 : distance === 1 ? 0.6 : 0.3,
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="size-2 rounded-full"
            style={{ backgroundColor: activeColor }}
          />
        </div>
      </div>
    </div>
  );
}
