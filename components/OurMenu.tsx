"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomBtn from "./CustomBtn";
import { data } from "@/constant";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { InView } from "./ui/animations/inView";

const OurMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: (itemWidth) * index,
        behavior: 'smooth'
      })
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.menu.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.menu.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000) // Auto-scroll every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative md:px-[20px] xl:px-[150px] xl:py-6 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <div className="flex-center">
          <div className="flex justify-center items-center lg:flex-between w-full gap-1">
            <div className="">
              <InView
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewOptions={{ margin: "0px 0px -350px 0px" }}
              >
                <div className="flex items-center gap-2 xl:gap-5">
                  <div className="hidden lg:flex-center size-[54px] rounded-full bg-[rgba(127,128,201,0.05)] lg:size-[118px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      className="ml-2 
            size-[30px] lg:size-[54px]"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.39463 33.7914C7.53669 33.833 6.80551 33.1686 6.7619 32.317C6.30757 23.2253 12.5972 15.4231 21.1492 13.6211C21.0194 13.2297 20.9494 12.8118 20.9494 12.3783C20.9494 10.1767 22.7273 8.39075 24.9228 8.39075C27.1164 8.39075 28.8941 10.1767 28.8941 12.3783C28.8941 12.8116 28.8241 13.2294 28.6943 13.6208C37.2464 15.4222 43.5391 23.2247 43.0857 32.317C43.0421 33.1686 42.311 33.833 41.453 33.7914C40.593 33.7499 39.9309 33.023 39.9745 32.1714C40.4023 23.5522 33.5397 16.3453 24.9228 16.3453C16.3058 16.3453 9.44325 23.5522 9.87323 32.1714C9.91683 33.023 9.2546 33.7499 8.39463 33.7914ZM25.7787 12.3783C25.7787 11.9006 25.3963 11.5061 24.9228 11.5061C24.4493 11.5061 24.0648 11.9006 24.0648 12.3783C24.0648 12.8352 24.4472 13.2299 24.9228 13.2299C25.3963 13.2299 25.7787 12.8352 25.7787 12.3783Z"
                        fill="#1A1B4B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.7077 36.1801C41.7816 36.1747 41.8576 36.1747 41.9328 36.1801H43.6161C44.4762 36.1801 45.1738 36.8862 45.1738 37.7378C45.1738 38.6101 44.4762 39.2955 43.6161 39.2955H42.964L42.742 40.0224C41.9216 42.7224 39.437 44.5708 36.6227 44.5708H13.2269C10.4127 44.5708 7.92814 42.7224 7.10773 40.0224L6.88664 39.2955H6.23152C5.37155 39.2955 4.67383 38.6101 4.67383 37.7378C4.67383 36.8862 5.37155 36.1801 6.23152 36.1801H7.91902C7.99406 36.1747 8.06912 36.1747 8.14314 36.1801H41.7077ZM10.144 39.2955C10.6146 40.5767 11.8437 41.4555 13.2269 41.4555H36.6227C38.006 41.4555 39.2351 40.5767 39.7057 39.2955H10.144Z"
                        fill="#1A1B4B"
                      />
                    </svg>
                  </div>
                  <div className="relative flex flex-col items-center lg:items-start">
                    <h2 className="font-kgBlankSolid text-2xl text-primary lg:text-5xl">
                      Our menu
                    </h2>
                    <p className="font-gilroyLight text-xs text-text lg:text-lg">
                      Choose your taste
                    </p>
                    <img
                      src="/icons/grass1.svg"
                      alt="grass"
                      loading="lazy"
                      className="hidden lg:block absolute -right-3/4 bottom-2"
                    />
                  </div>
                </div>
              </InView>
            </div>
            <div className="hidden lg:block">
              <InView
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewOptions={{ margin: "0px 0px -350px 0px" }}
              >
                <div className="flex items-center gap-8">
                  <CustomBtn text="View menu" />
                </div>
              </InView>
            </div>
          </div>
        </div>


        <InView
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(40px)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className="relative w-full mx-auto mt-10">
            <div
              ref={carouselRef}
              className="flex py-5 overflow-y-visible overflow-x-hidden sm:overflow-x-visible scroll-smooth snap-x snap-mandatory"
            >
              {data.menu.map((menu, idx) => (
                <div
                  key={idx + menu.img}
                  className={cn("flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 !px-0 transition-all duration-300 ease-in-out")}
                >
                  <div className="flex flex-col items-center justify-center gap-2 w-full">

                    <img
                      src={menu.img}
                      height={260}
                      width={260}
                      alt={menu.name}
                      className={cn("transition-transform duration-300 ease-in-out w-[180px] h-[180px] sm:size-[260px]", idx === currentIndex && "transform scale-[135%]")}
                      loading="lazy"
                    />

                    <div className={cn(idx === currentIndex && "flex flex-col mt-10 gap-1")}>
                      <p className={cn("ml-2 lg:ml-0 max-w-[75px] text-center font-gilroyRegular text-xs text-primary", idx === currentIndex && "text-base ml-0 max-w-[100px] font-semibold")}>
                        {menu.name}
                      </p>
                      <div className={cn(
                        "mt-4 font-kgBlankSolid text-sm flex items-center gap-2 rounded-full px-3 py-1",
                        idx === currentIndex
                          ? "bg-[#E0C28F] lg:bg-primary lg:text-white py-3 outline outline-[4px] outline-[#E0C28F42]"
                          : "bg-gray-100 text-primary"
                      )}>
                        <p>
                          <span>{menu.price}</span>
                        </p>
                        {
                          idx === currentIndex &&
                          <div className="bg-primary lg:bg-white rounded-full size-2"></div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InView>
        <CustomBtn text="View menu" className="flex lg:hidden w-fit h-fit mx-auto !py-4 mt-5" />
      </div >
    </section >
  );
};

export default OurMenu;
