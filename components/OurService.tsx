"use client"

import { cn } from '@/lib/utils'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import CustomBtn from './CustomBtn'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Carousel } from './ui/carousel'

const tabContents = [
  { id: "1", title: "Event Catering", content: "Experience the art of culinary excellence with Chef Irina Restaurant's exceptional event catering services. From intimate gatherings to grand celebrations, our globally-inspired dishes are designed to delight your guests and create unforgettable memories.", image: "/our-service/event-catering.png" },
  { id: "2", title: "Business Lunch", content: "Elevate your business meetings with our exceptional business lunch catering services. Our expert chefs craft menus that are both delicious and professional, ensuring a memorable experience for your clients and colleagues.", image: "/our-service/business-lunch.png" },
  { id: "3", title: "Food Delivery", content: "Enjoy the convenience of our food delivery services, bringing the flavors of Chef Irina Restaurant right to your doorstep. Our carefully crafted menus ensure a delightful experience, whether you're in the office or at home.", image: "/our-service/food-delivery.png" },
  { id: "4", title: "Chef Irina Catering", content: "Indulge in the ultimate culinary experience with Chef Irina Catering, where every dish is a masterpiece. Our team of expert chefs and catering professionals work together to create unforgettable events that leave a lasting impression.", image: "/our-service/chef-irina-catering.png" }
]

const OurService = () => {
  const [activeTab, setActiveTab] = useState(tabContents[0]?.id || "1")
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((value: string) => {
    if (tabContents.some(tab => tab.id === value)) {
      setActiveTab(value);
      const activeTabElement = document.getElementById(`tab-${value}`);
      activeTabElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = tabContents.findIndex(tab => tab.id === activeTab)
      const nextIndex = (currentIndex + 1) % tabContents.length
      handleTabChange(tabContents[nextIndex].id)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab, handleTabChange])

  const activeTabContent = tabContents.find(tab => tab.id === activeTab)

  if (tabContents.length === 0) {
    return <div className="text-center py-10">No services available at the moment.</div>
  }

  return (
    <div className={cn("flex flex-col items-center justify-center gap-16 lg:flex-row py-10 lg:py-0")}>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full flex-center">
        <div className="flex-center">
          <div className="flex flex-col items-center gap-10 text-center lg:py-24 lg:text-left lg:w-1/2 lg:ml-32">
            <div className="flex flex-col gap-5 max-w-[450px]">
              <h1 className="heading">Our Services</h1>
              <p className="paragraph">Reach out to us for your every need</p>
              <div className="flex-between bg-muted p-2 rounded-lg">
                <div className="flex-center gap-2 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g opacity="0.5">
                      <path d="M11.9993 16.0268C8.16232 16.0268 5.24532 12.5778 5.88132 8.79376L6.56032 4.22376C6.62232 3.80776 6.97932 3.49976 7.40032 3.49976H16.5993C17.0203 3.49976 17.3773 3.80776 17.4393 4.22376L18.1183 8.79376C18.7543 12.5778 15.8363 16.0268 11.9993 16.0268ZM11.9993 16.0268L12 21.5001M9.80957 21.4998H14.1906" stroke="#1A1B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.00391 10.4019L7.28891 9.61594C8.80091 8.69294 10.6879 8.63094 12.2569 9.45294C13.8639 10.2949 15.7989 10.2089 17.3239 9.22694L17.9979 8.79395" stroke="#1A1B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.h3
                      key={activeTab}
                      initial={{ opacity: 0, y: -25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 25 }}
                      className="transition-all duration-300 ease-in-out font-kgBlankSketch text-[#1A1B4B]/80 w-full"
                    >
                      {activeTabContent?.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                <TabsList className="flex-center gap-[1px]">
                  {tabContents.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={cn("p-px rounded-full group")}
                    >
                      <div className={cn("p-px rounded-full", activeTab === tab.id && "outline outline-[1px] outline-primary outline-offset-1")}>
                        <motion.div
                          className={cn("size-2 rounded-full")}
                          animate={{
                            backgroundColor: activeTab === tab.id ? "#1A1B4B" : "#A8A9C2"
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <AnimatePresence mode="popLayout">
                <div className="lg:hidden w-full h-[150px] rounded-xl overflow-hidden relative">
                  {tabContents.map((item) => (
                    (activeTab === item.id) && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="relative size-full" key={item.id + item.title}>
                        <img src={item.image} alt={item.title} className="absolute inset-0 size-full object-cover " />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute left-10 bottom-3 text-left">
                          <h3 className="text-white font-kgBlankSketch font-semibold text-lg">{item.title}</h3>
                          <p className="text-white font-gilroyRegular text-sm line-clamp-2 max-w-[200px]">{item.content}</p>
                        </div>
                      </motion.div>
                    )
                  ))}
                </div>
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                {tabContents.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="my-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="paragraph"
                    >
                      {tab.content}
                    </motion.p>
                  </TabsContent>
                ))}
              </AnimatePresence>
              <CustomBtn
                text="Contact us"
                className="cursor-pointer"
                clickable={false}
                link="contact-us"
              />
            </div>
          </div>

          <div className="hidden lg:flex relative items-center justify-center rounded-lg lg:order-last flex-col space-y-6 lg:w-1/2 mt-[-300px] lg:mr-32">
            <TabsList className="flex-center flex-wrap gap-2 !bg-transparent">
              {tabContents.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn("relative w-[240px] h-[192px] rounded-[14px] overflow-hidden cursor-pointer p-0 border-none transition-all duration-300 ease-in-out", activeTab === tab.id && "h-[240px] drop-shadow-md")}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      className='object-cover object-center transition-all duration-300 rounded-[14px]'
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-image.jpg';
                      }}
                    />
                    {activeTab === tab.id && (
                      <>
                        <motion.div
                          className={"absolute inset-0 bg-black"}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.div
                          className={"absolute top-32 w-full left-0 h-full bg-black blur-sm z-60"}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.h4
                          className="absolute bottom-16 left-4 text-white font-kgBlankSketch font-semibold z-10 text-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: activeTab === tab.id ? 1 : 0.7,
                            y: activeTab === tab.id ? 0 : 10
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tab.title}
                        </motion.h4>
                        <div className="relative h-full w-full z-50">
                          <p
                            className="absolute bottom-4 left-4 z-10"
                          >
                            <span className="w-fit text-sm font-gilroyRegular text-white">
                              {tab.id === "1" ? <p>Experience the art of culinary<br />excellence with Chef Irina...</p> : tab.id === "2" ? <p>Elevate your business meetings<br />with our exceptional business...</p> : tab.id === "3" ? <p className="">Enjoy the convenience of our<br />food delivery services,  bri...</p> : <p>Indulge in the ultimate culinary<br />experience with Chef Irina Cat..</p>}
                            </span>
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default OurService
