import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import ContactForm from "./contact-form";
import { InView } from "./ui/animations/inView";
import Image from "next/image";

const locations = [
  {
    value: "Arjan",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.205577168274!2d55.243178176567696!3d25.061020477798944!2m3!1f0!2f0!3f0!3m2!1sen!2sen!4f13.1!3m3!1m2!1s0x3e5f437d94f055a1%3A0x258d8d52694cdf45!2sChef%20Irina%20Restaurant!5e0!3m2!1sen!2sen!4v1727231343116!5m2!1sen!2sen"
  },
  {
    value: "Business bay",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.405809979249!2d55.266395876570584!3d25.189533677715946!2m3!1f0!2f0!3f0!3m2!1sen!2sen!4f13.1!3m3!1m2!1s0x3e5f692864613387%3A0x5a09abd465509d5c!2sChef%20Irina%20Restaurant%20-%20Business%20Bay!5e0!3m2!1sen!2sen!4v1727231230595!5m2!1sen!2sen"
  },
  {
    value: "Silicon Oasis",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.22464362507!2d55.38962757656931!3d25.128094977755595!2m3!1f0!2f0!3f0!3m2!1sen!2sen!4f13.1!3m3!1m2!1s0x3e5f6513dbe7b2db%3A0x433d910f5f4445a2!2sChef%20Irina%20Restaurant%20-%20Silicon%20Oasis!5e0!3m2!1sen!2sen!4v1727229995928!5m2!1sen!2sen"
  },
];

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-[12%] hidden w-1/2 lg:block">
        <div className="flex-center">
          <h1 className="text-border text-2xl xl:text-7xl font-kgBlankSketch">Contact us</h1>
          <div className="relative h-[2px] w-[calc(30%)] bg-border before:absolute before:left-0 before:top-[-4px] before:size-[10px] before:rounded-full before:bg-border"></div>
        </div>
      </div>

      <div className="absolute left-0 top-0 hidden lg:block">
        <img src="/icons/leaf5.svg" alt="" className="size-[100px]" />
      </div>

      <div className="mx-auto my-20 grid max-w-screen-2xl grid-cols-1 justify-center gap-20 px-1 md:px-[20px] lg:grid-cols-2 xl:px-[150px] xl:py-6">
        <div className="relative mx-auto flex items-center justify-center rounded-lg lg:order-last lg:mx-0">
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
            viewOptions={{ margin: "0px 0px -250px 0px" }}
          >
            <Tabs defaultValue="Arjan" className="">
              <TabsList className="my-3 grid grid-cols-3 gap-2 bg-transparent text-xs text-primary">
                {locations.map((location) => (
                  <TabsTrigger
                    key={location.value}
                    value={location.value}
                    className="flex-center gap-2 rounded-lg border border-border font-kgBlankSolid data-[state=active]:bg-secondary data-[state=active]:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hidden lg:block"
                    >
                      <path
                        d="M9.00977 10.8096C9.00977 12.0834 10.0427 13.1164 11.3165 13.1164C12.5922 13.1164 13.6252 12.0834 13.6252 10.8096C13.6252 9.5339 12.5922 8.50098 11.3165 8.50098"
                        stroke="#1A1B4B"
                        stroke-width="1.38462"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.8395 13.3681C16.7282 17.2025 13.4937 20.3078 11.3078 20.3078C8.63277 20.3078 4.38477 15.6545 4.38477 10.7068C4.38477 6.83361 7.48353 3.69238 11.3078 3.69238C15.1312 3.69238 18.2309 6.83361 18.2309 10.7068"
                        stroke="#1A1B4B"
                        stroke-width="1.38462"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-xs">{location.value}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {locations.map((location) => (
                <TabsContent key={location.value} value={location.value} className="h-[300px] w-full">
                  <div className="size-full rounded-lg border border-border p-1">
                    <iframe
                      src={location.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </InView>
        </div>

        <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:py-24 lg:text-left w-full">
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
            <Card className="flex w-full flex-col gap-5 border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle><h1 className="heading">Contact us</h1></CardTitle>
                <CardDescription className="paragraph">
                  Reach out to us for your events
                </CardDescription>
              </CardHeader>
              <ContactForm />
            </Card>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
