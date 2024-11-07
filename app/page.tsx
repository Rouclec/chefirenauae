"use client";
import { AnimatedReviewStats } from "@/components/animatedReviewStats";
import ContactUs from "@/components/Contact-us";
import CustomBtn from "@/components/CustomBtn";
import OurMenu from "@/components/OurMenu";
import { InView } from "@/components/ui/animations/inView";
import Wrapper from "@/components/Wrapper";
import Hero from "@/public/hero.png";
import Hero2 from "@/public/hero2.png";
import Mockup from "@/public/mockup.png";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import OurService from "@/components/OurService";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: {
//     default: "Chef Irina Restaurant",
//     template: "%s | Chef Irina Restaurant",
//   },
//   description: "Experience the fusion of Slavic, Japanese, Central Asian, and Mediterranean cuisines at Chef Irina Restaurant. Unique taste, quality food.",
//   twitter: {
//     card: "summary_large_image",
//     creator: "@StanleyNouping",
//   },
//   keywords: "Dubai, Chef, Irina, Food, Restaurant, Delivery, Cooking, Meals, Chef Irina, Chef Irina Dubai, Chef Irina Restaurant, Chef Irina Meals, Chef Irina Delivery, Chef Irina Cooking, Arjan, Silicon Oasis, Business Bay, Dubai, UAE,",
// };


export default function Home() {

  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Get the width of the content
    const contentWidth = containerRef.current?.scrollWidth || 0;
    setWidth(contentWidth);
  }, []);

  const carouselImg = ["/diff-taste/1.png", "/diff-taste/2.png", "/diff-taste/4.png", "/diff-taste/5.png", "/diff-taste/6.png", "/diff-taste/7.png", "/diff-taste/8.png"]

  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  return (
    <main className="select-none bg-background overflow-hidden px-5 lg:px-0 py-10 lg:py-0 relative">
      <Wrapper imagePosition="right" src="/hero.png" onMobile={false} className="section">
        <div className="flex-center lg:flex-start flex-col gap-5">
          <div className="flex items-center justify-center lg:justify-start gap-2 font-kgBlankSketch text-xs sm:text-sm text-primary md:gap-5">
            <img src="/icons/location.svg" alt="Location" className="size-6 sm:size-8" />
            <p>Arjan</p>
            <div className="h-2 w-1 rounded-lg bg-secondary"></div>
            <p>Business bay</p>
            <div className="h-2 w-1 rounded-lg bg-secondary"></div>
            <p>Silicon Oasis</p>
            <img
              src="/icons/country.svg"
              loading="lazy"
              alt="country"
              className="size-6 sm:size-8 rounded-full"
            />
          </div>
          <h1 className="heading">
          Chef Irina: A Fusion of Cultures on Your Plate
          </h1>

          <h2 className="font-gilroyRegular text-text lg:text-2xl">
            Look not further, the best stop for <br />
            your stomach.
          </h2>
          <img
            src="/hero.png"
            alt="hero"
            loading="lazy"
            className={
              (cn("lg:hidden size-[350px]"))} />
          <div className="flex-col sm:flex-row flex items-center gap-8">
            <CustomBtn text="View menu" className="hidden lg:flex w-full sm:w-fit" />
            <div className="flex flex-col items-center sm:items-start gap-1">
              <img
                src="/talabat.svg"
                alt="talabat"
                loading="lazy"
                className="h-[20px] w-[70px]"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                <p className="font-kgBlankSolid text-text text-lg">
                  4.5
                </p>
                <img src="/icons/stars.svg" alt="star" loading="lazy" />
                <AnimatedReviewStats />
              </div>
            </div>
            <CustomBtn text="View menu" className="flex lg:hidden w-full" />
          </div>
        </div>
      </Wrapper>

      <img
        src="/icons/grass1.svg"
        alt="grass"
        loading="lazy"
        className="lg:hidden absolute top-72 lg:top-20 -left-[40%] lg:-left-[10%]"
      />

      {/* Our menu section */}

      <div className="hidden lg:block overflow-hidden my-40" ref={containerRef}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [`10%`, `-${width}px`] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex w-full items-center mx-40">
                <h1 className="font-kgBlankSolid text-2xl text-[rgba(26,_27,_75,_0.05)] lg:text-7xl flex-1">
                  Chef irina Restaurant
                </h1>
                <img
                  src="/icons/black&white-logo.svg"
                  alt="logo"
                  className="ml-3 h-8 lg:h-16"
                  loading="lazy"
                />
              </div>
              <div className="flex w-full items-center">
                <h1 className="font-kgBlankSolid text-2xl text-[rgba(26,_27,_75,_0.05)] lg:text-7xl flex-1">
                  Chef irina Restaurant
                </h1>
                <img
                  src="/icons/black&white-logo.svg"
                  alt="logo"
                  className="ml-3 h-8 lg:h-16"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative lg:mb-52 mt-20 lg:mt-0">
        <OurMenu />
        <div className="hidden lg:block absolute right-0 top-20 ">
          <img
            src="/icons/grass3.svg"
            alt="grass"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* About us section */}
      <div className="hidden lg:flex items-center gap-5 my-20 lg:mt-52">
        <div className="w-[50%] h-[2px] bg-border before:absolute before:top-[-4px] before:right-0 before:size-[10px] before:rounded-full before:bg-border relative"></div>
        <h2 className="text-border text-2xl xl:text-7xl font-kgBlankSketch">
          About us
        </h2>
        <div className="w-[23%] h-[2px] bg-border before:absolute before:top-[-4px] before:left-0 before:size-[10px]] before:rounded-full before:bg-border relative"></div>
      </div>

      <div className="relative lg:mb-52 mt-20 lg:mt-0">
        <Wrapper
          src="/hero2.png"
          imagePosition="left"
          className="md:px-[20px] xl:px-[150px] xl:py-6 max-w-screen-2xl mx-auto"
        >
          <div className="flex items-center lg:items-start flex-col gap-5">
            <h1 className="heading mb-5">Every Flavor Tells a Story</h1>
            <p className="paragraph">
              {
                "Welcome to chef Irina's kitchen where we bring the best of culinary experiences right to your doorstep. Our mission is to simply provide our customers with exceptional food and service that exceeds their expectations every time."
              }
            </p>
            <p className="paragraph">
              {
                "Our highly trained professional chefs aim to make every experience delicious and heavenly by curating dishes with utmost care."
              }
            </p>
            <CustomBtn
              text="Read more"
              className="cursor-pointer mt-10"
              clickable={false}
              link="about"
            />
          </div>
        </Wrapper>
        <img
          src="/icons/grass4.svg"
          alt="grass"
          loading="lazy"
          className="hidden lg:block absolute top-0 left-0"
        />
        <img
          src="/icons/oignon.svg"
          alt="grass"
          loading="lazy"
          className="hidden lg:block absolute bottom-20 right-0"
        />
      </div>

      {/* Our Services section */}
      <div className="hidden lg:flex items-center gap-5 my-20 lg:my-52">
        <div className="w-[30%] h-[2px] bg-border before:absolute before:top-[-4px] before:right-0 before:size-[10px] before:rounded-full before:bg-border relative"></div>
        <h2 className="text-border text-[17px] xl:text-7xl font-kgBlankSketch">
          Our services
        </h2>

      </div>

      <div className="relative">
        <OurService />
        <div className="hidden lg:block absolute left-0 top-0">
          <img src="/icons/grass5.svg" alt="" className="" loading="lazy" />
        </div>
        <div className="hidden lg:block absolute right-0 top-0">
          <img src="/icons/coffee.svg" alt="" className="" loading="lazy" />
        </div>
      </div>

      {/* Our taste section */}
      <div className="relative lg:my-52" id="a-different-taste">
        <div className="flex-center flex-col gap-5 my-20 md:px-[20px] xl:px-[150px] xl:py-6 max-w-screen-2xl mx-auto">
          <div className="">
            <img src="/icons/leave2.svg" alt="" className="" loading="lazy" />
          </div>
          <h1 className="heading">
            A different taste
          </h1>
          <p className="paragraph">You will love the taste. Give a try !</p>
          <div className="hidden lg:block mt-20 p-5 sm:p-0">
            <InView
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,

                  filter: "blur(0px)",
                },
              }}
            >
              <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-7 sm:grid-rows-6 gap-4 max-w-7xl h-[500px] mx-auto p-4 rounded-xl">
                <InView
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-3 row-span-6 relative overflow-hidden rounded-lg shadow-md bg-white hidden lg:block"
                >
                  <img
                    src="/diff-taste/1.png"
                    alt="Seafood and pasta dish with clams and herbs"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>

                <InView
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,

                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-2 row-span-3 relative overflow-hidden rounded-lg shadow-md bg-white hidden lg:block"
                >
                  <img
                    src="/diff-taste/2.png"
                    alt="Dish in cast-iron skillet with tomatoes and sauce"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>

                <InView
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-1 row-span-2 sm:row-span-4 relative overflow-hidden rounded-lg shadow-md bg-white"
                >
                  <img
                    src="/diff-taste/3.png"
                    alt="Grilled meat dish on a blue plate"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>
                <InView
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-1 row-span-1 sm:row-span-2 relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src="/diff-taste/4.png"
                    alt="Colorful dish with vegetables and meat"
                    loading="lazy"
                    className="object-cover size-full"
                  />
                </InView>

                <InView
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-2 row-span-3 relative overflow-hidden rounded-lg shadow-md bg-white hidden lg:block"
                >
                  <img
                    src="/diff-taste/5.png"
                    alt="Rice or grain dish on a blue plate"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>

                <InView
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-1 row-span-1 lg:-mt-[75px] sm:row-span-2 relative overflow-hidden rounded-lg shadow-md h-[135px]"
                >
                  <img
                    src="/diff-taste/6.png"
                    alt="Appetizers on a round woven plate with dipping sauces"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>

                <InView
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-1 row-span-1 sm:row-span-2 relative overflow-hidden rounded-lg shadow-md "
                >
                  <img
                    src="/diff-taste/7.png"
                    alt="Fresh salad or vegetable dish with tomatoes and herbs"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>
                <InView
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  viewOptions={{ once: true, margin: '0px 0px -350px 0px' }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,

                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,

                      filter: "blur(0px)",
                    },
                  }}
                  className="col-span-1 row-span-3 lg:-mt-[75px] relative overflow-hidden rounded-lg shadow-md bg-white h-[135px]"
                >
                  <img
                    src="/diff-taste/8.png"
                    alt="Pastries or desserts on a plate with utensils"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </InView>
              </div>
            </InView>
          </div>

          <div className="block lg:hidden mt-5">
            <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}>
              <CarouselContent className="rounded-lg">
                {carouselImg.map((img, index) => (
                  <CarouselItem key={index} className="w-full h-[300px]">
                    <img src={img} alt="carousel" className="rounded-lg object-cover object-center w-full h-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="hidden lg:block absolute left-0 top-1/2">
          <img src="/icons/grass6.svg" alt="" loading="lazy" />
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2">
          <img src="/icons/grid-right.svg" alt="" loading="lazy" />
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2">
          <img src="/icons/leave3.svg" alt="" loading="lazy" />
        </div>
      </div>

      {/* Scan order section */}
      <div className="relative lg:my-52">
        <div className="absolute left-0 top-0 hidden lg:block">
          <img src="/icons/grid-left.svg" alt="" loading="lazy" />
        </div>
        <div className="absolute right-0 top-0 hidden lg:block">
          <img src="/icons/grid-right.svg" alt="" loading="lazy" />
        </div>
        <div className="absolute right-0 top-1/2 hidden lg:block">
          <img src="/icons/leaf4.svg" alt="" loading="lazy" />
        </div>
        <Wrapper
          imagePosition="left"
          orderLast={false}
          src="/mockup.png"
          imageStyle="w-full xl:w-[610px]"
          className="gap-1 my-20 md:px-[20px] xl:px-[150px] xl:py-6 w-full lg:max-w-screen-2xl mx-auto"
        >
          <div className="flex-center flex-col gap-2 w-full mb-10 lg:mb-0">
            <h1 className="heading">Scan to order</h1>
            <p className="paragraph mb-10 lg:mb-0">Qr code menu available.</p>
            <div className="w-full flex justify-center">
              <img src="/icons/qr.svg" alt="" loading="lazy" />
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Contact us section */}
      <div className="">
        <ContactUs />
      </div>
    </main >
  );
}
