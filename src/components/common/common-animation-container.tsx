"use client";

import type { MotionProps } from "motion/react";
import { motion } from "motion/react";
import React from "react";

export interface Props extends Omit<MotionProps, "children"> {
  delay?: number;
  reverse?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CommonAnimationContainer: React.FC<Props> = ({
  children,
  delay,
  reverse,
  className,
  ...motionProps
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.01 }}
      transition={{
        duration: 0.2,
        delay: delay,
        ease: "easeInOut",
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default CommonAnimationContainer;
