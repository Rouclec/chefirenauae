import ContactUs from "@/components/Contact-us";
import CustomBtn from "@/components/CustomBtn";
import { InView } from "@/components/ui/animations/inView";
import { cn } from "@/lib/utils";
import React from "react";
import { Metadata } from "next";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Chef Irina Restaurant for reservations, inquiries, or feedback. Reach out through our website, WhatsApp, email, or visit our location in Dubai, UAE.",
}

const page = () => {
  return (
    <main className="select-none bg-white lg:py-0">
      <section className="lg:p-0 flex flex-col items-center justify-center gap-10 bg-background !py-20 px-2">
        <div className="section relative grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2">
          <div className="relative flex flex-col items-center gap-10 text-center lg:items-start lg:text-left mb-16 lg:mb-0">
            <div className="hidden lg:block absolute -ml-10 2xl:-ml-32 top-0 rotate-180" style={{ transformOrigin: 'left center' }}>
              <h1 className="absHeading" style={{ writingMode: "vertical-rl", transform: 'rotate(360deg)' }}>
                Contact Us
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
              <div className="flex-center lg:flex-start flex-col gap-5 px-4 sm:p-0">
                <h1 className="heading">
                  Let&apos;s Connect And Savour Culinary Delights Together
                </h1>
                <p className="paragraph mb-10 lg:mb-0">
                  Thank you for considering reaching out to Chef Irina
                  Restaurant. We are thrilled to hear from you and are eager to
                  assist with any inquiries, reservations, or feedback you may
                  have. Our team is dedicated to providing exceptional service
                  and ensuring that you&apos;re dining experience with us is
                  nothing short of extraordinary. Feel free to connect with us
                  through any of the following channels:
                </p>
                <CustomBtn text="View our menu" />
              </div>
            </InView>
          </div>
          <div
            className={cn(
              "relative flex w-full items-center justify-center rounded-lg lg:order-last"
            )}
          >
            <Socials />
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};

export default page;
