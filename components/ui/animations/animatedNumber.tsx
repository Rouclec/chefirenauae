"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  SpringOptions,
  Transition,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

type AnimatedNumberType = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  transition?: Transition;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumberType) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn("tabular-nums", className)}>
      {display}
    </motion.span>
  );
}
