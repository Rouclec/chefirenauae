"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import React from "react";
import { Button } from "./ui/button";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import Image from "next/image";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Thumbnail = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-5">
        <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex w-full items-center justify-center rounded-lg lg:order-last">
            <img
              src="/hero.png"
              alt="hero"
              loading="lazy"
              className="size-[350px] md:size-[600px] 2xl:h-[600px] 2xl:w-[700px]"
            />
          </div>
          <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:py-24 lg:text-left">
            <div className="flex items-center justify-center gap-2 font-kgBlankSketch text-sm text-primary md:gap-5">
              <img
                src="/icons/location.svg"
                alt="Location"
                loading="lazy"
                className="size-8"
              />
              <p>Arjan</p>
              <div className="h-2 w-1 rounded-lg bg-secondary"></div>
              <p>Business bay</p>
              <div className="h-2 w-1 rounded-lg bg-secondary"></div>
              <p>Silicon Oasis</p>
              <img
                src="/icons/country.svg"
                alt="country"
                loading="lazy"
                className="size-8 rounded-full"
              />
            </div>
            <h1 className="text-center font-kgBlankSketch text-3xl !leading-[120%] text-primary md:text-6xl lg:text-left">
            Chef Irina: A Fusion of Cultures on Your Plate
            </h1>
            <h2 className="font-gilroyRegular text-text lg:text-2xl">
              Look not further, the best stop for <br />
              your stomach.
            </h2>
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <img
                  src="/icons/talabat.svg"
                  alt="talabat"
                  loading="lazy"
                  className="h-[20px] w-[70px]"
                />
                <div className="flex items-center justify-center gap-1">
                  <p className="font-kgBlankSolid text-sm text-text lg:text-lg">
                    4.5
                  </p>
                  <img src="/icons/stars.svg" alt="star" loading="lazy" />
                  <p className="mt-px font-gilroySemiBold text-sm text-text lg:text-base">
                    (1088 reviews)
                  </p>
                </div>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="bg-black sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <img
        src="/icons/grass.svg"
        alt="grass"
        loading="lazy"
        className="absolute -left-[80px] bottom-32 hidden size-[311px] lg:block"
      />
    </section>
  );
};

export default Thumbnail;
