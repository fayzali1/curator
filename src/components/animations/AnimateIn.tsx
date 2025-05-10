"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps, Variant } from "framer-motion";

interface AnimateInProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  fromY?: number;
  opacity?: [number, number]; // [from, to]
  animate?: boolean; // Control whether to animate
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  fromY = 20,
  opacity = [0, 1],
  animate = true,
  ...props
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={animate ? { y: fromY, opacity: opacity[0] } : false}
      animate={animate ? { y: 0, opacity: opacity[1] } : false}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.5, 0.51, 0.99], // Custom easing for a more natural feel
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
