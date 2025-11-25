// import React from "react";
import circleFrame from "@/assets/images/circle-frame.png";
import { cn } from "@/lib/utils";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { HowItWork } from "./components/how-it-work";
import { OurExpertise } from "./components/our-expertise";
import { OurProcess } from "./components/our-process";
import { OurServices } from "./components/our-services";
import { OurTeam } from "./components/our-team";
import { TechStack } from "./components/tech-stack";
import { Testimonials } from "./components/testimonials";
import { WhatMakesUsStandout } from "./components/what-make-us-standout";

const Home = () => {
  return (
    <main className="bg-[#F9F9F9]">
      <Hero />
      <section id="services" aria-label="Our Services">
        <OurServices />
      </section>
      <section id="expertise" aria-label="Our Expertise">
        <OurExpertise />
      </section>
      <section id="our-strength" aria-label="What Makes Us Standout">
        <WhatMakesUsStandout />
      </section>
      <section id="how-it-work" aria-label="How It Works">
        <HowItWork />
      </section>
      <section id="our-process" aria-label="Our Process">
        <OurProcess />
      </section>
      <section id="our-team" aria-label="Our Team">
        <OurTeam />
      </section>
      <Testimonials />
      <TechStack />
      <section
        id="contact"
        aria-label="Contact Us"
        className={cn(
          "bg-[radial-gradient(100%_100%_at_50%_100.08%,_#001857_0%,_#001344_100%)]",
          "min-h-[630px] px-20 py-24 overflow-hidden relative max-sm:px-6"
        )}
      >
        <div
          className={cn(
            "bg-no-repeat bg-[size:1150px_1150px]",
            "h-[1150px] w-[1150px] absolute top-[23%] left-[50%] translate-x-[-50%] z-0"
          )}
          style={{
            backgroundImage: `url(${circleFrame.src || circleFrame})`,
          }}
          aria-hidden="true"
        />
        <Contact />
      </section>
    </main>
  );
};

export default Home;
