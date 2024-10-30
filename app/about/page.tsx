"use client";
import CustomBtn from "@/components/CustomBtn";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

const Page = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  const carouselImg = ["/diff-taste/1.png", "/diff-taste/2.png", "/diff-taste/4.png", "/diff-taste/5.png", "/diff-taste/6.png", "/diff-taste/7.png", "/diff-taste/8.png"]

  return (
    <main className="select-none bg-white pb-10">
      <div className="relative bg-background p-5 sm:p-0">
        <Wrapper
          src="/food2.svg"
          className="section"
          imageStyle="lg:w-[500px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5 p-5 sm:p-0 relative">
            <div className="hidden lg:block absolute -ml-10 2xl:-ml-32 top-2 rotate-180" style={{ transformOrigin: 'left center' }}>
              <h1 className="absHeading" style={{ writingMode: "vertical-rl", transform: 'rotate(360deg)' }}>
                About us
              </h1>
            </div>
            <h1 className="heading">
              Unleash your tast adventure at chef irina restaurant
            </h1>
            <p className="paragraph">
              Prepare for an unforgettable exploration of global cuisine at Chef
              Irina Restaurant LLC. Positioned at the pulsating core of Al
              Barsha South 3, Dubai, we are committed to transporting our
              patrons on an exciting and diverse culinary journey that bridges
              continents right from their tables.
            </p>
            <CustomBtn text="View our menu" />
          </div>
        </Wrapper>
      </div>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <div className="hidden lg:block absolute right-0 top-20">
          <img src="/icons/grass1-reverse.svg" alt="" className="" />
        </div>
        <Wrapper
          src="/about3.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">Venture beyond the ordinary</h1>
            <p className="paragraph max-w-[500px]">
              Step inside the gastronomic universe of Chef Irina Restaurant,
              where each dish is a carefully crafted narrative of flavours,
              harmoniously blending the world&apos;s diverse culinary
              traditions. Our epicurean haven is not just a restaurant but a
              gateway into an intricate dance of tastes from various corners of
              the globe.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <div className="hidden lg:block absolute right-0 top-1/2">
          <img src="/icons/leaf4.svg" alt="" loading="lazy" />
        </div>
        <Wrapper
          src="/about4.png"
          className="section"
          imageStyle="lg:w-[500px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading lg:w-[700px]">
              Slavic Comforts: Homely Embrace
            </h1>
            <p className="paragraph max-w-[500px]">
              Feel the homely embrace of Slavic comfort food as we guide you
              through the endearing hearths of Slavic homes. The star here is
              our delicious pierogi, with each dough pocket enveloping a
              delightful story of heritage and tradition. Allow our comforting
              Slavic flavors to transport you back in time, evoking a sense of
              nostalgia with each mouthful.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <Wrapper
          src="/about5.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">
              The subtlety of japan: <br /> Sushi spectacle
            </h1>
            <p className="paragraph max-w-[500px]">
              Discover the nuanced artistry of Japan&apos;s culinary heritage
              with our finely crafted sushi. Each roll is a symphony of balance
              and perfection, combining fresh ingredients in an elegant showcase
              of taste and visual delight. Allow our sushi to guide you through
              Japan&apos;s rich gastronomic tapestry, each piece an embodiment
              of the profound respect for ingredients and technique.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <div className="hidden lg:block absolute left-0 top-1/4">
          <img src="/icons/grass6.svg" alt="" loading="lazy" />
        </div>
        <div className="hidden lg:block absolute right-0 top-1/4">
          <img src="/icons/leave3.svg" alt="" loading="lazy" />
        </div>
        <Wrapper
          src="/about6.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">Mediterranean Bliss: Coastal pleasures</h1>
            <p className="paragraph max-w-[500px]">
              Discover the nuanced artistry of Japan&apos;s culinary heritage
              with our finely crafted sushi. Each roll is a symphony of balance
              and perfection, combining fresh ingredients in an elegant showcase
              of taste and visual delight. Allow our sushi to guide you through
              Japan&apos;s rich gastronomic tapestry, each piece an embodiment
              of the profound respect for ingredients and technique.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <div className="absolute left-0 top-0 hidden lg:block">
          <img src="/icons/grid-left.svg" alt="" loading="lazy" />
        </div>
        <Wrapper
          src="/about2.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">A serenade of central Asian flavours</h1>
            <p className="paragraph max-w-[500px]">
              We invite you to journey through the fabled Silk Road with our
              Central Asian specialties. Experience a sensory adventure with our
              succulent lamb skewers, their robust flavours narrating the
              captivating tales of ancient spice routes. Each mouthful is a
              delightful exploration of the vivid flavours and cultural richness
              that has traversed this historic trade route.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <Wrapper
          src="/about7.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">
              Celebratory cuisine: <br />
              Your event, our culinary canvas
            </h1>
            <p className="paragraph max-w-[500px]">
              At Chef Irina Restaurant, we are passionate about turning your
              special occasions into unforgettable culinary spectacles. Be it a
              joyous birthday, a romantic wedding, intellectual corporate
              gatherings or intimate family dinners, we promise to create a
              bespoke gastronomic adventure that delights and impresses. Each of
              our carefully curated dishes is a testament to our passion for
              food and our dedication to making your events memorable.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0 flex flex-col gap-4">
        <div className="hidden lg:block absolute right-0 top-20">
          <img src="/icons/grass1-reverse.svg" alt="" className="" />
        </div>
        <Wrapper
          src="/about-8.png"
          onMobile={false}
          className="section !gap-3"
          imageStyle="lg:w-[350px]"
          imagePosition="left"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">Curate your own culinary odyssey</h1>
            <p className="paragraph max-w-[500px]">
              We offer a stunning range of dishes, encompassing the broad
              spectrum of global cuisine. From the exciting flavours of Central
              Asia, the delicate balance of Japanese sushi, the rustic charm of
              the Mediterranean, to the heartening flavours of Slavic home
              cooking, we provide an extensive menu that caters to every
              discerning palate.
            </p>
          </div>
        </Wrapper>
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
      </section>

      <section className="relative lg:mb-10 p-5 sm:p-0">
        <Wrapper
          src="/about9.png"
          className="section"
          imageStyle="lg:w-[700px]"
          imagePosition="right"
        >
          <div className="flex-center lg:flex-start flex-col gap-5">
            <h1 className="heading">
              Design your order : Experience a delightful culinary journey
            </h1>
            <p className="paragraph max-w-[500px]">
              Join us at Chef Irina Restaurant, where culinary dreams become
              reality. Situated in the vibrant Al Barsha South 3, Dubai, we are
              excited to take you on a unique gastronomic journey. Contact us
              via email at info@chefirinauae.com, or call us at +971 58 551 9590
              for reservations and booking inquiries. Embark on an extraordinary
              culinary adventure with us, where we create delicious memories and
              moments that will linger long after the meal ends.
            </p>
          </div>
        </Wrapper>
      </section>
    </main>
  );
};

export default Page;
