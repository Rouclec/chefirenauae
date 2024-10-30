import React from "react";
import Hero from "@/public/catering1.png";
import { TextEffect } from "@/components/ui/animations/textAnimation";
import { InView } from "@/components/ui/animations/inView";
import Wrapper from "@/components/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering",
  description: "Chef Irina Catering offers a unique culinary experience with a blend of Slavic, Japanese, Central Asian, and Mediterranean cuisines.",
}


const page = () => {
  return (
    <main className="select-none bg-white overflow-x-hidden pb-20">
      <section className="p-2 lg:p-0 mt-0 flex flex-col items-center justify-center gap-10 bg-background lg:pb-24 mb-10">
        <div className="relative flex flex-col text-center gap-10 section sm:!pt-10 px-4">
          <div className="hidden lg:block absolute -ml-10 2xl:-ml-32 top-10 rotate-180" style={{ transformOrigin: 'left center' }}>
            <h1 className="heading" style={{ writingMode: "vertical-rl", transform: 'rotate(360deg)' }}>
              Catering
            </h1>
          </div>
          <div className="relative w-full">
            <img
              src={Hero.src}
              alt="hero"
              className="sm:w-full"
            />
          </div>

          <TextEffect
            per="word"
            as="h3"
            preset="slide"
            className="lg:text-center heading"
          >
            A culinary voyage with Chef Irina Catering, Dubai.
          </TextEffect>
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
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="paragraph">
              Venture into the extraordinary realm of Chef Irina Catering, where
              every event becomes a riveting culinary journey that traverses the
              diverse landscapes of Central Asian plains, the delicate art forms
              of Japanese kitchens, the sun-drenched beaches of the
              Mediterranean, and the warm, inviting homes of Slavic territories.
              We masterfully choreograph this global culinary dance in the
              thriving hub of our cloud kitchen, right in the heart of the UAE.
            </p>
          </InView>
        </div>
      </section>

      <section className="relative lg:mb-10 p-4 lg:p-0">
        <div className="hidden lg:block absolute right-0 top-0">
          <img
            src="/icons/semi-grid.svg"
            alt="decorative grid"
            loading="lazy"
          />
        </div>
        <div className="hidden lg:block absolute left-0 top-0">
          <img
            src="/icons/grass-9.png"
            alt="decorative grass"
            loading="lazy"
          />
        </div>
        <Wrapper
          src="/catering4.png"
          className="section"
          imageStyle="lg:w-[500px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5 px-4 lg:px-0">
            <h1 className="heading">
              Birthdays, weddings, we got you covered.
            </h1>
            <p className="paragraph max-w-[500px]">
              Each milestone in your life, whether it&apos;s the jubilant echo
              of birthday cheers, the heartfelt vows at weddings, the
              intellectual symphony of corporate discussions, or the comforting
              silence of family meals, becomes a stage for our epicurean voyage.
              Our well-crafted gastronomic adventures are delivered straight to
              your doorstep, turning the spotlight on your unique narrative.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 px-4 lg:p-0">
        <div className="absolute left-0 top-1/3 hidden lg:block">
          <img
            src="/icons/leaf5.svg"
            alt="leaf"
            loading="lazy"
          />
        </div>

        <Wrapper
          src="/catering2.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5 px-4 lg:px-0">
            <h1 className="heading">A Culinary Journey</h1>
            <p className="paragraph max-w-[500px]">
              Our voyage then sweeps us towards the azure waters of the
              Mediterranean. Here, the star attraction is the grilled fish,
              basking in the warmth of olive oil, its tantalizing aroma carrying
              whispers of sun-soaked shores, blooming lemon groves, and bustling
              sea-side markets. We conclude our journey in the comforting
              hearths of Slavic homesteads, as we indulge in the simple joy of
              pierogi. These tender dough pockets, filled with heart-warming
              ingredients, tell tales of generations, resonating with the
              comforting hum of home and heritage.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-4 lg:p-0">
        <Wrapper
          src="/catering3.png"
          className="section"
          imageStyle="lg:w-[800px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5 px-4 lg:px-0">
            <h1 className="heading">&rdquo; Embark on a Gastronomic Voyage &rdquo;</h1>
            <p className="paragraph max-w-[500px]">
              This is merely a taste of the captivating odyssey we can curate
              for your event, an enchanting parade of global flavors
              meticulously planned to take your occasion from the realm of the
              memorable to the unforgettable. So, won&apos;t you join us on this
              gastronomic voyage? Let&apos;s co-curate a menu that&apos;s the
              perfect fit for your event and personal tastes. At Chef Irina
              Catering, we ensure that every bite is a voyage of discovery,
              every flavor a souvenir, and every meal a cherished memory of your
              journey across the world&apos;s culinary landscape.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-4 lg:p-0 ">
        <div className="absolute left-0 top-1/3 hidden lg:block">
          <img
            src="/icons/grass6.svg"
            alt="grass"
            loading="lazy"
          />
        </div>

        <Wrapper
          src="/about2.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5 px-4 lg:px-0">
            <h1 className="heading">A global banquet: Asian Culinary Art</h1>
            <p className="paragraph max-w-[500px]">
              Embark on this journey with us and envision a banquet laid before
              your eyes. We begin our expedition on the spice-infused trails of
              Central Asia. Succulent lamb skewers, expertly charred, narrate
              tales of the Silk Road, their flavors as varied and exciting as
              the ancient trade route itself. Next, we journey to the Land of
              the Rising Sun where the art of sushi awaits. Miniature edible
              masterpieces, precise in their assembly, embody the spirit of
              Japanese cuisine, offering a tantalizing exploration of umami and
              harmony.
            </p>
          </div>
        </Wrapper>
      </section>
    </main>
  );
};

export default page;
