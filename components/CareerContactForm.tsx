"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Upload } from "lucide-react";
import Image from "next/image";
import { Label } from "./ui/label";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  telephone: z.string().min(10).max(20),
  position: z.string({ required_error: "Required" }).min(2).max(50),
  uploadCv: z
    .instanceof(File)
    .refine((file) => file.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      (file) =>
        ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type),
      "Only .pdf, .doc and .docx formats are supported."
    ),
  message: z.string().min(2).max(500),
});

type FormValues = z.infer<typeof formSchema>;

export default function CareerContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      position: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'uploadCv') {
          formData.append(key, value as File);
        } else {
          formData.append(key, value as string);
        }
      });
      formData.append('formType', 'career');

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your application has been submitted successfully.",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">First Name</FormLabel>
                <FormControl className="!m-0">
                  <Input
                    {...field}
                    placeholder="John"
                    className="bg-transparent focus:outline-none !p-0 h-fit border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">Last Name</FormLabel>
                <FormControl className="!m-0">
                  <Input
                    {...field}
                    placeholder="Doe"
                    className="bg-transparent focus:outline-none !p-0 h-fit border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">Email</FormLabel>
                <FormControl className="!m-0">
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="bg-transparent focus:outline-none !p-0 h-fit border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">Telephone</FormLabel>
                <FormControl className="!m-0 !p-0">
                  <PhoneInput
                    country={"us"}
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    inputStyle={{
                      width: "100%",
                      marginLeft: "-10px",
                      height: "20px",
                      color: "hsl(var(--text))",
                      fontSize: "16px",
                      backgroundColor: "transparent",
                      border: "none",
                      fontFamily: "var(--font-kgblanksketch)",
                    }}
                    buttonStyle={{
                      border: "none",
                      marginLeft: "-8px",
                      background: "transparent",
                      padding: "0px"
                    }}
                    countryCodeEditable={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">Position</FormLabel>
                <FormControl className="!m-0">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-transparent border-none !h-0 pb-2">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chef">Chef</SelectItem>
                      <SelectItem value="waiter">Waiter</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uploadCv"
            render={({ field }) => (
              <FormItem className="px-6 py-2 rounded-lg border border-border relative">
                <FormLabel className="text-sm text-text font-gilroyRegular h-fit">Upload CV</FormLabel>
                <FormControl className="!m-0">
                  <div className="flex items-center justify-between">
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className="hidden"
                      id="cv-upload"
                    />
                    <Label
                      htmlFor="cv-upload"
                      className="cursor-pointer flex items-center gap-2 text-sm text-text"
                    >
                      {field.value ? field.value.name : "Choose file"}
                    </Label>
                    <img
                      src="/icons/upload-icon.svg"
                      alt="Upload Icon"
                      loading="lazy"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => document.getElementById('cv-upload')?.click()}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-[150px] resize-none bg-transparent p-4 "
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="flex items-center justify-center mx-auto lg:mx-0 w-fit gap-2 rounded-sm text-white bg-primary hover:bg-gray-800 mt-10"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
          <SendIcon />
        </Button>
      </form>
    </Form>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.8325 8.17463L10.109 13.9592L3.59944 9.88767C2.66675 9.30414 2.86077 7.88744 3.91572 7.57893L19.3712 3.05277C20.3373 2.76963 21.2326 3.67283 20.9456 4.642L16.3731 20.0868C16.0598 21.1432 14.6512 21.332 14.0732 20.3953L10.106 13.9602"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
