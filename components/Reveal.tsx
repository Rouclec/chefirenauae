"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("show");
    }
  }, [isInview, mainControls]);
  return (
    <div ref={ref} className="">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
