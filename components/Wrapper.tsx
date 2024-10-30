import { cn } from "@/lib/utils";
import React from "react";
import { InView } from "./ui/animations/inView";

const Wrapper = ({
  src,
  imageStyle,
  imagePosition = "right",
  children,
  className,
  onMobile = true,
  orderLast = true
}: {
  secondImg?: string;
  src: string;
  imageStyle?: string;
  imagePosition: "left" | "right";
  children: React.ReactNode;
  onMobile?: boolean;
  orderLast?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 py-10 lg:py-0",
        className
      )}
    >
      <div className={cn("flex flex-col items-center gap-10 text-center lg:items-start lg:py-24 lg:text-left", orderLast && "order-last")}>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              x: 20,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          {children}
        </InView>
      </div>
      <div
        className={cn(
          "flex relative w-full items-center justify-center rounded-lg lg:order-last",
          imagePosition === "left" && "lg:order-first", !onMobile && "hidden lg:flex"
        )}
      >
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              x: -20,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <img
            src={src}
            alt="hero"
            loading="lazy"
            className={cn(
              "mx-auto size-[350px] md:size-[600px] 2xl:h-[600px] 2xl:w-[700px]",
              imageStyle
            )}
          />
        </InView>
      </div>

    </div>
  );
};

export default Wrapper;
