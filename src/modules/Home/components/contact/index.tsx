import { CommonTitle } from "@/components/common/common-title";
import { cn } from "@/lib/utils";
import { ContactForm } from "./components/contact-form";

export const Contact = () => {
  return (
    <div
      className={cn(
        "flex justify-between max-w-[1280px] mx-auto gap-14 max-xl:flex-col max-2xl:gap-6 relative z-10"
      )}
    >
      <div>
        <CommonTitle className="text-white mb-3 max-sm:text-3xl">
          Have An Innovative Idea?
        </CommonTitle>
        <p className="text-lg leading-8 text-[#7C89AE] max-w-[600px]">
          Leave your contact details below and we’ll get back to you within 24
          hours. Let’s discuss about your project!
        </p>
      </div>
      <div className="max-w-[608px] w-full max-xl:max-w-full">
        <ContactForm />
      </div>
    </div>
  );
};
