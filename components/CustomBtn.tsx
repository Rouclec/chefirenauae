"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useNearestWebsite } from "@/hooks/useNearestWebsite";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Card } from "./ui/card";

const CustomBtn = ({
  text,
  variant,
  className,
  size,
  clickable = true,
  link,
}: {
  text: string;
  variant?:
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  clickable?: boolean;
  link?: string;
}) => {
  const nearestWebsite = useNearestWebsite(); // Updated hook usage
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!nearestWebsite) {
    return (
      <Button
        variant={variant}
        disabled
        size={size}
        className={cn(
          "w-fit mx-auto lg:mx-0 flex items-center gap-2 px-10 py-7 lg:py-8 text-lg font-gilroyBold !rounded-[14px] transition-all duration-300 hover:scale-105 !cursor-not-allowed",
          className
        )}
      >
        {text}
      </Button>
    );
  }

  const handleRedirect = () => {
    setIsDialogOpen(true);
  };

  const confirmRedirect = () => {
    window.open(nearestWebsite, '_blank');
    closeDialog();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const redirect = () => {
    router.push(`/${link}`);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={clickable ? handleRedirect : redirect}
        className={cn(
          "w-fit flex items-center gap-2 !px-10 !py-8 text-lg font-gilroyBold !rounded-[14px] transition-all duration-300 hover:scale-105",
          className
        )}
      >
        {text}
        <img src="/icons/arrow-right.svg" alt="arrow" loading="lazy" />
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm sm:max-w-[425px] p-6 rounded-lg">
          <Card className="p-6 border-primary border-2">
            <DialogHeader>
              <DialogTitle className="text-2xl font-kgBlankSketch text-primary">Confirm Redirection</DialogTitle>
              <DialogDescription className="text-lg font-gilroyRegular text-text">
                You will be redirected to the nearest website in a new tab. Do you want to continue?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6 !flex space-x-4">
              <Button
                variant="outline"
                onClick={closeDialog}
                className="font-gilroyBold text-primary border-primary hover:bg-primary hover:text-primary-foreground w-fit lg:w-auto"
              >
                No
              </Button>
              <Button
                onClick={confirmRedirect}
                className="font-gilroyBold text-secondary border-primary hover:bg-primary hover:text-primary-foreground w-fit lg:w-auto"
              >
                Yes
              </Button>
            </DialogFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomBtn;
