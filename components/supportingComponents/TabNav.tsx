"use client";

import { useRef, useState } from "react";

import { motion } from "motion/react";

interface Props {
  links: string[];
}

function Tab({ links }: Props) {
  const ref = useRef<(HTMLLIElement | null)[]>([]);
  const [selected, setSelected] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  return (
    <div>
      <ul className="relative flex items-center justify-between rounded-lg bg-neutral-100 p-2">
        {links.map((link, idx) => (
          <li
            ref={(element) => {
              ref.current[idx] = element;
            }}
            key={idx}
            className="z-20 cursor-pointer bg-transparent p-2"
            onClick={() => {
              if (!ref) return;
              const left = ref.current[idx]?.offsetLeft || 0;
              const width =
                ref.current[idx]?.getBoundingClientRect().width || 0;
              setSelected({ left, width });
            }}
          >
            {link}
          </li>
        ))}
        <motion.div
          className="absolute z-10 my-auto h-8 rounded-lg bg-neutral-300"
          animate={{ left: selected.left, width: selected.width }}
        />
      </ul>
    </div>
  );
}

export default Tab;
