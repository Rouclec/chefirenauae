"use client";
import React, { useEffect, useState } from "react";
import { AnimatedNumber } from "./ui/animations/animatedNumber";

export const AnimatedReviewStats = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(2082);
  }, []);
  return (
    <p className="mt-px font-gilroySemiBold text-sm text-text lg:text-base">
      (
      <AnimatedNumber
        springOptions={{
          bounce: 2,
          duration: 3000,
        }}
        transition={{ delay: 2 }}
        value={value}
      />{" "}
      reviews)
    </p>
  );
};
