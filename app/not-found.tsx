import { TextEffect } from "@/components/ui/animations/textAnimation";
import { InView } from "@/components/ui/animations/inView";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <main className="min-h-[70vh] flex-center flex-col gap-6 bg-background p-4">
      <TextEffect
        as="h1"
        preset="slide"
        per="word"
        className="heading text-4xl md:text-6xl text-center"
      >
        Page Not Found
      </TextEffect>

      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="paragraph text-center max-w-[600px] mb-8">
          Oops! The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back to our culinary journey.
        </p>

        <div className="flex-center">
          <Link
            href="/"
            className="btn-primary px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            <Button>
              Return Home
            </Button>
          </Link>
        </div>
      </InView>
    </main>
  );
}

export default NotFound;
