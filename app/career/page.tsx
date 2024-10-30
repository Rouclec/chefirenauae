import CareerContactForm from "@/components/CareerContactForm";
import { InView } from "@/components/ui/animations/inView";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Career",
  description: "Start your career with Chef Irina Restaurant and join our team of culinary experts. We offer a variety of positions in the food industry, from chefs to waitstaff. Apply now and become part of our family!",
}

const Page = () => {
  return (
    <main className="select-none bg-white overflow-x-hidden px-5 sm:px-0 py-16 lg:py-0 ">
      <section className="flex flex-col items-center justify-center gap-10 bg-background lg:!pb-[100px] lg:!pt-20">
        <div className="relative grid grid-cols-1 items-start justify-center gap-20 lg:grid-cols-2 section">
          <div className="relative flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
            <div className="hidden lg:block absolute -ml-10 2xl:-ml-32 top-0 rotate-180" style={{ transformOrigin: 'left center' }}>
              <h1 className="absHeading" style={{ writingMode: "vertical-rl", transform: 'rotate(360deg)' }}>
                Work with us
              </h1>
            </div>
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
              <div className="flex-center lg:flex-start flex-col gap-10">
                <h1 className="heading">Want to be part of Chef irina ?</h1>
                <p className="paragraph">
                  Thank you for considering reaching out to Chef Irina
                  Restaurant. We are thrilled to hear from you and are eager to
                  assist with any inquiries, reservations, or feedback you may
                  have. Our team is dedicated to providing exceptional service
                  and ensuring that you’re dining experience with us is nothing
                  short of extraordinary. Feel free to connect with us through
                  any of the following channels:
                </p>
              </div>
            </InView>
          </div>

          <div
            className={cn(
              "relative flex w-full items-center justify-center  lg:order-last"
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
              <CareerContactForm />
            </InView>
          </div>
        </div>
        <div className="hidden sm:block absolute right-0 top-1/2">
          <Image src="/icons/careerIcon.svg" alt="alt" width={125} height={135} />
        </div>
      </section>
    </main>
  );
};

export default Page;
