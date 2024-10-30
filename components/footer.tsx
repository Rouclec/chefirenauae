"use client";
import { data } from "@/constant";
import { FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react";
import React from "react";
import FooterForm from "./footer-form";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-primary">
      <div className="">
        <div className="mx-auto p-20 text-text md:px-[20px] xl:px-[150px] xl:py-20 max-w-screen-2xl flex flex-col lg:flex-row gap-20 lg:gap-52">
          <div className="">
            <div className="flex justify-center md:justify-start mx-auto">
              <img src="/footerlogo.svg" alt="logo" loading="lazy" className="" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="mb-4 font-gilroyBold text-xl text-white/90">
                Important Links
              </p>
              <dl className="flex flex-col gap-2 font-gilroyRegular text-sm text-white/90">
                {data.importantLinks.map(
                  (link: { link: string; route: string }, idx: number) => (
                    <dt key={idx + link.link}>
                      {" "}
                      <Link href={link.route}>- {link.link}</Link>
                    </dt>
                  )
                )}
              </dl>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-center sm:text-left">
                <p className="mb-4 font-gilroyBold text-xl text-white/90">
                  Our Services
                </p>

                <dl className="flex flex-col items-center sm:items-start gap-2 font-gilroyRegular text-sm text-white/90 lg:items-start">
                  <dt className="flex-center gap-2 cursor-pointer" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@chefirinauae.com", "_blank")}>
                    <Mail className="size-5" />
                    <span className="">info@chefirinauae.com</span>
                  </dt>

                  <dt className="flex-center gap-2 cursor-pointer" onClick={() => window.open("tel:+971585519590", "_blank")}>
                    <Phone className="size-5" />
                    <span className="">+971 58 551 9590</span>
                  </dt>
                  <dt className="flex-center gap-2 cursor-pointer" onClick={() => window.open("https://wa.me/971585430016", "_blank")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6.62449 16.6973C6.44207 16.6057 6.2418 16.5741 6.04316 16.6211C5.36777 16.78 4.27807 17.0517 3.48511 17.2511C3.03431 17.3646 2.62405 16.9632 2.72864 16.5108C2.92567 15.6562 3.1989 14.4677 3.32862 13.8733C3.36917 13.6885 3.34403 13.4979 3.26377 13.3268C2.78864 12.3093 2.5 11.1832 2.5 10.0002C2.5 5.40705 6.68449 1.74389 11.4293 2.63414C14.4105 3.19358 16.8064 5.59028 17.3658 8.57075C18.2561 13.3155 14.5929 17.5 9.99983 17.5C8.825 17.5 7.65096 17.2162 6.62449 16.6973Z"
                        stroke="white"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16721 7.05085C6.01184 8.21189 6.88749 10.0564 8.428 11.5969C9.9685 13.1375 11.7838 13.9839 12.9449 12.8286L13.0519 12.7215C13.5173 12.2569 13.4493 11.4842 12.9101 11.1081C12.7358 10.9872 12.5533 10.8592 12.3595 10.7237C11.9403 10.4294 11.3671 10.4748 11.0047 10.8356L10.8085 11.0302C9.96442 10.5275 9.53634 10.0442 8.96634 9.18808L9.16092 8.99191C9.52092 8.62866 9.56634 8.05541 9.27284 7.63624C9.13659 7.44245 9.00934 7.26003 8.88775 7.08571C8.51234 6.54654 7.73963 6.47924 7.27424 6.94382L7.16721 7.05085Z"
                        stroke="white"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="">+971 58 543 0016</span>
                  </dt>
                </dl>
              </div>
              <div className="my-5">
                <p className="mb-4 font-gilroyBold text-xl text-white/90">
                  Subscribe to newsletter
                </p>
                <FooterForm />
              </div>
            </div>

            <div className="flex-center md:justify-start lg:items-start flex-col">
              <p className="mb-4 font-gilroyBold text-xl text-white/90 ">
                Our Locations
              </p>
              <img src="/localisation.png" alt="logo" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-screen-2xl mx-auto p-6 md:px-[20px] xl:px-[150px]">
            <div className="text-center sm:flex-between sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">
                  Copyright 2024 | . All Rights Reserved | Made with love by {" "}
                  <span className="text-secondary">Briluce Web Services LTD</span>
                </span>
              </p>

              <div className="flex gap-2 items-center justify-center my-5 lg:my-0">
                <img src="/master.svg" alt="logo" loading="lazy" />
                <img src="/visa.svg" alt="logo" loading="lazy" />
              </div>

              <div className="flex-center gap-2 mt-5 sm:mt-0">
                <div className="p-2 rounded-full bg-secondary">
                  <FacebookIcon className="text-primary" />
                </div>
                <div className="p-2 rounded-full bg-secondary">
                  <InstagramIcon className="text-primary" />
                </div>
                <div className="p-2 rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.66836 19.8231C7.45829 19.7175 7.22768 19.6811 6.99895 19.7353C6.22122 19.9182 4.96642 20.2311 4.05331 20.4607C3.53421 20.5914 3.06179 20.1293 3.18223 19.6083C3.40911 18.6242 3.72374 17.2556 3.87312 16.5712C3.9198 16.3583 3.89086 16.1389 3.79843 15.9419C3.25132 14.7702 2.91895 13.4734 2.91895 12.1112C2.91895 6.82212 7.73745 2.60394 13.2011 3.62907C16.6341 4.27328 19.393 7.03312 20.0372 10.4652C21.0623 15.9288 16.8441 20.7473 11.5551 20.7473C10.2023 20.7473 8.85035 20.4206 7.66836 19.8231Z"
                      stroke="#1A1B4B"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.29341 8.71357C6.96298 10.0505 7.97131 12.1745 9.74524 13.9484C11.5191 15.7224 13.6095 16.6971 14.9465 15.3667L15.0697 15.2434C15.6057 14.7084 15.5273 13.8187 14.9064 13.3855C14.7057 13.2464 14.4956 13.0989 14.2724 12.943C13.7897 12.604 13.1296 12.6563 12.7123 13.0717L12.4864 13.2959C11.5144 12.717 11.0215 12.1605 10.3651 11.1746L10.5892 10.9487C11.0037 10.5305 11.056 9.87034 10.7181 9.38766C10.5612 9.16451 10.4146 8.95445 10.2746 8.75372C9.84235 8.13285 8.95256 8.05535 8.41666 8.59033L8.29341 8.71357Z"
                      stroke="#1A1B4B"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
