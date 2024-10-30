import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "./ui/form";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const FooterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-center mx-auto w-fit rounded-lg bg-[rgba(217,217,217,0.2)] p-2 gap-2"
      >
        <Mail className="size-5 text-white/90" />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <input
              type="email"
              placeholder="Your email"
              {...field}
              className="outline-none bg-transparent text-sm text-white/90 w-[100px]"
            />
          )}
        />
        <Button
          type="submit"
          className="flex-center gap-2 text-xs lg:text-sm"
          variant={"secondary"}
        >
          <span>Subscribe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.21517 10.892L10.6704 14.8753C10.7778 15.0499 10.9457 15.0479 11.0135 15.0385C11.0813 15.0291 11.2444 14.9875 11.3035 14.7894L14.3737 4.41995C14.4274 4.23667 14.3287 4.11179 14.2844 4.06748C14.2415 4.02317 14.1186 3.9285 13.9407 3.97886L3.56385 7.01752C3.36714 7.07526 3.32417 7.24042 3.31477 7.30823C3.30537 7.37738 3.30269 7.54858 3.47657 7.65802L7.50552 10.1777L11.0652 6.58045C11.2605 6.38307 11.5794 6.38105 11.7775 6.57642C11.9756 6.77179 11.9769 7.09137 11.7815 7.28876L8.21517 10.892ZM10.9611 16.0496C10.4938 16.0496 10.0655 15.8119 9.81305 15.4037L7.21011 11.1801L2.94283 8.51134C2.48293 8.22332 2.24258 7.71038 2.3171 7.17127C2.39095 6.63215 2.76088 6.20381 3.28053 6.0514L13.6574 3.01274C14.1347 2.8731 14.6463 3.00536 14.9981 3.35582C15.3499 3.70964 15.4808 4.2266 15.3385 4.70596L12.2683 15.0747C12.1145 15.5964 11.6849 15.965 11.1471 16.0368C11.084 16.0449 11.0229 16.0496 10.9611 16.0496Z"
              fill="#1A1B4B"
            />
          </svg>
        </Button>
      </form>
    </Form>
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
};

export default FooterForm;
