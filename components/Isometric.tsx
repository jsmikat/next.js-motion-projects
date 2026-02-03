"use client";

import { useState } from "react";

import { motion } from "motion/react";

const HIT_AREA_POINTS = "171.12,0.5 453.11,163.28 282.85,261.56 0.86,98.78";

const IsometricCard = ({
  isHovered,
  isFaded,
  onMouseEnter,
}: {
  isHovered: boolean;
  isFaded: boolean;
  onMouseEnter: () => void;
}) => {
  const fill = isHovered ? "#dbeafe" : isFaded ? "#f4f4f5" : "#fafafa";
  const stroke = isHovered ? "#3b82f6" : "#a1a1aa";
  const shadowFill = isHovered ? "#93c5fd" : "#e4e4e7";

  return (
    <svg
      width="454"
      height="267"
      viewBox="0 0 454 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-color-transitions"
      style={{ pointerEvents: "none" }}
    >
      <g style={{ pointerEvents: "auto" }}>
        <rect
          y="0.499967"
          width="325.592"
          height="196.588"
          rx="15.5"
          transform="matrix(0.866044 0.499967 -0.866044 0.499967 171.553 4.25)"
          fill={shadowFill}
          style={{ pointerEvents: "none" }}
        />
        <rect
          y="0.499967"
          width="325.592"
          height="196.588"
          rx="15.5"
          transform="matrix(0.866044 0.499967 -0.866044 0.499967 171.553 4.25)"
          stroke={stroke}
          fill="none"
          style={{ pointerEvents: "none" }}
        />
        <rect
          y="0.499967"
          width="325.592"
          height="196.588"
          rx="15.5"
          transform="matrix(0.866044 0.499967 -0.866044 0.499967 171.553 0.25)"
          fill={fill}
          style={{ pointerEvents: "none" }}
        />
        <rect
          y="0.499967"
          width="325.592"
          height="196.588"
          rx="15.5"
          transform="matrix(0.866044 0.499967 -0.866044 0.499967 171.553 0.25)"
          stroke={stroke}
          fill="none"
          style={{ pointerEvents: "none" }}
        />
        <polygon
          points={HIT_AREA_POINTS}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={onMouseEnter}
        />
      </g>
    </svg>
  );
};

export default function IsometricStack() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const layerData = [
    { id: "layer1", offset: 0 },
    { id: "layer2", offset: 34 },
    { id: "layer3", offset: 68 },
    { id: "layer4", offset: 102 },
  ];

  const layerCount = layerData.length;

  return (
    <div className="relative flex min-h-[500px] items-center justify-center">
      <div
        className="relative h-[400px] w-[460px]"
        onMouseEnter={() => setIsContainerHovered(true)}
        onMouseLeave={() => {
          setIsContainerHovered(false);
          setHoveredLayer(null);
        }}
      >
        {layerData.map((layer, index) => {
          const isHovered = hoveredLayer === index;
          const isFaded = isContainerHovered && !isHovered;
          const zIndex = layerCount - index;

          return (
            <motion.div
              key={layer.id}
              className="pointer-events-none absolute left-0 top-0"
              initial={false}
              animate={{
                y: isContainerHovered ? layer.offset + (isHovered ? -2 : 0) : 0,
                opacity: isFaded ? 0.6 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              style={{ zIndex }}
            >
              <IsometricCard
                isHovered={isHovered}
                isFaded={isFaded}
                onMouseEnter={() => setHoveredLayer(index)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
