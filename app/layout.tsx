import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  gilroyBold,
  gilroyLight,
  gilroyRegular,
  gilroySemiBold,
  kgBlankSketch,
  kgBlankSolid,
} from "@/fonts/font";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Chef Irina: A Fusion of Cultures on Your Plate",
    template: "%s | Chef Irina Restaurant",
  },
  description: "Experience the fusion of Slavic, Japanese, Central Asian, and Mediterranean cuisines at Chef Irina Restaurant. Unique taste, quality food.",
  twitter: {
    card: "summary_large_image",
    creator: "@StanleyNouping",
  },
  keywords: "Dubai, Chef, Irina, Food, Restaurant, Delivery, Cooking, Meals, Chef Irina, Chef Irina Dubai, Chef Irina Restaurant, Chef Irina Meals, Chef Irina Delivery, Chef Irina Cooking, Arjan, Silicon Oasis, Business Bay, Dubai, UAE,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gilroyBold.variable} ${gilroyLight.variable} ${gilroyRegular.variable} ${gilroySemiBold.variable} ${kgBlankSolid.variable} ${kgBlankSketch.variable} scroll-smooth`}
    >
      <GoogleTagManager gtmId="G-D712LNPGMC" />
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
