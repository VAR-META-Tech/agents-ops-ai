import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { EMAIL_INFO, GOOGLE_FORM_ENDPOINT } from "../utils/constants";

const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  companyName: z.string().min(1, { message: "Company Name is required" }),
  jobTitle: z.string().min(1, { message: "Job Title is required" }),
  country: z
    .object({
      label: z.string().min(1, { message: "Country is required" }),
      value: z.string().min(1, { message: "Country is required" }),
    })
    .nullable()
    .refine((data) => data !== null, { message: "Country is required" }),
  message: z.string().optional(),
});

const defaultValues: z.infer<typeof contactFormSchema> = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  jobTitle: "",
  country: null,
  message: "",
};

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues,
  });

  const sendEmail = async (data: z.infer<typeof contactFormSchema>) => {
    const emailData = {
      to: EMAIL_INFO.to,
      from: EMAIL_INFO.from,
      subject: EMAIL_INFO.subject + " " + data.fullName,
      ...data,
    };
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(emailData),
      });
      return response.json();
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  };

  const handleSubmitGGForm = async (
    data: z.infer<typeof contactFormSchema>
  ) => {
    const payload = new URLSearchParams();
    payload.set("entry.1804555128", data.fullName);
    payload.set("entry.422420848", data.email);
    payload.set("entry.1127587790", data.phone);
    payload.set("entry.947328136", data.companyName);
    payload.set("entry.810394646", data.jobTitle);
    payload.set("entry.1127170555", data.country?.label ?? "");
    payload.set("entry.488728819", data.message ?? "");

    try {
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      toast.success("Contact form submitted successfully");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      throw error;
    }
  };

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      setIsSubmitting(true);
      await sendEmail(data);
      await handleSubmitGGForm(data);
    } catch (error) {
      toast.error("Contact form submission failed");
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
};
