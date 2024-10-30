"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 bg-white py-2 md:px-[20px] xl:px-[150px] xl:py-6 drop-shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-8 lg:gap-20">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="alt"
              loading="lazy"
              className="size-4 lg:w-[77px] lg:h-[62px]"
            />
          </Link>

          <div className="hidden items-center justify-center gap-1 md:flex cursor-pointer" onClick={() => {
            window.open("https://wa.me/971585519590", "_blank");
          }}>
            <img
              src="/icons/phone.svg"
              alt="phone"
              loading="lazy"
              className="size-4 lg:size-6"
            />
            <p className="font-gilroyBold text-xs font-normal text-[#2C2C2C] lg:text-base">
              +971 58 551 9590
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end ">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li className="relative">
                <Link
                  href="/"
                  className="text-text transition hover:text-text/75 font-kgBlankSolid text-xs lg:text-base"
                >
                  Home
                </Link>
                <div
                  className={cn(
                    "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                    pathname === "/" && "opacity-100"
                  )}
                ></div>
              </li>

              <li className="relative">
                <Link
                  href="/about"
                  className="text-xs lg:text-base text-text transition hover:text-text/75 font-kgBlankSolid"
                >
                  About us
                </Link>
                <div
                  className={cn(
                    "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                    pathname === "/about" && "opacity-100"
                  )}
                ></div>
              </li>

              <li className="relative">
                <Link
                  href="/catering"
                  className="text-text transition text-xs lg:text-base hover:text-text/75 font-kgBlankSolid"
                >
                  Catering
                </Link>
                <div
                  className={cn(
                    "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                    pathname === "/catering" && "opacity-100"
                  )}
                ></div>
              </li>

              <li className="relative">
                <Link
                  href="/career"
                  className="text-text transition text-xs lg:text-base hover:text-text/75 font-kgBlankSolid"
                >
                  Careers
                </Link>
                <div
                  className={cn(
                    "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                    pathname === "/career" && "opacity-100"
                  )}
                ></div>
              </li>

              <li className="relative">
                <Link
                  href="/contact-us"
                  className="text-text transition text-xs lg:text-base hover:text-text/75 font-kgBlankSolid"
                >
                  Contact us
                </Link>
                <div
                  className={cn(
                    "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                    pathname === "/contact-us" && "opacity-100"
                  )}
                ></div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="block rounded bg-primary p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <MenuIcon
                    className="size-5 text-secondary"
                    aria-hidden="true"
                  />
                </button>
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-16 pl-10">
                <SheetHeader>
                  <SheetClose asChild>
                    <Link href="/">
                      <img
                        src="/logo.png"
                        alt="alt"
                        loading="lazy"
                        className="size-4 lg:size-6"
                      />
                    </Link>
                  </SheetClose>
                </SheetHeader>
                <nav aria-label="Global" className="">
                  <ul className="flex flex-col gap-10 text-sm items-start">
                    <li className="relative">
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className="text-text transition hover:text-text/75 font-kgBlankSolid text-xl"
                        >
                          Home
                        </Link>
                      </SheetClose>
                      <div
                        className={cn(
                          "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                          pathname === "/" && "opacity-100"
                        )}
                      ></div>
                    </li>


                    <li className="relative">
                      <SheetClose asChild>
                        <Link
                          href="/about"
                          className="text-text transition hover:text-text/75 font-kgBlankSolid text-xl"
                        >
                          About us
                        </Link>
                      </SheetClose>
                      <div
                        className={cn(
                          "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                          pathname === "/about" && "opacity-100"
                        )}
                      ></div>
                    </li>

                    <li className="relative">
                      <SheetClose asChild>
                        <Link
                          href="/catering"
                          className="text-text transition text-xl hover:text-text/75 font-kgBlankSolid"
                        >
                          Catering
                        </Link>
                      </SheetClose>
                      <div
                        className={cn(
                          "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                          pathname === "/catering" && "opacity-100"
                        )}
                      ></div>
                    </li>

                    <li className="relative">
                      <SheetClose asChild>
                        <Link
                          href="/career"
                          className="text-text transition text-xl hover:text-text/75 font-kgBlankSolid"
                        >
                          Careers
                        </Link>
                      </SheetClose>
                      <div
                        className={cn(
                          "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                          pathname === "/career" && "opacity-100"
                        )}
                      ></div>
                    </li>
                    <li className="relative">
                      <SheetClose asChild>
                        <Link
                          href="/contact-us"
                          className="text-text transition text-xl hover:text-text/75 font-kgBlankSolid"
                        >
                          Contact us
                        </Link>
                      </SheetClose>
                      <div
                        className={cn(
                          "absolute opacity-0 bg-secondary rounded-full w-4 h-2 top-1/2 left-0 translate-y-[150%]",
                          pathname === "/contact-us" && "opacity-100"
                        )}
                      ></div>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Navbar;
