"use client";

import { Icons } from "@/assets/icons";
import agentsOpsLogoWhite from "@/assets/images/agents-ops-logo-white.png";
import { cn, handleScroll } from "@/lib/utils";
import Image from "next/image";

export const FOOTER_LINKS = [
  {
    label: "Services",
    elId: "services",
  },
  {
    label: "Expertise",
    elId: "expertise",
  },
  {
    label: "Our Strength",
    elId: "our-strength",
  },
  {
    label: "How It Works",
    elId: "how-it-work",
  },
  {
    label: "Our Process",
    elId: "our-process",
  },
  {
    label: "Our Team",
    elId: "our-team",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#001344] py-16 px-6 text-white">
      <div className="max-w-[1280px] mx-auto min-w-[320px] flex justify-between max-xl:flex-col">
        <div className="flex flex-col items-start justify-between">
          <div className="mb-12">
            <Image
              src={agentsOpsLogoWhite.src}
              alt="AgentOps"
              width={254}
              height={47}
              priority
            />
            <div className="text-base font-normal leading-[26px] text-[#7C89AE] pl-11">
              A Varmeta company
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col items-start gap-7 max-xl:grid",
              "max-xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-xl:w-full max-xl:gap-10 max-xl:mb-10"
            )}
          >
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Icons.locationIcon className="!w-5 !h-5" />
                <span className="font-semibold text-xl">Hanoi Head Office</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                18th floor, 319 Tower
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                63 Le Van Luong, Yen Hoa, Hanoi
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <Icons.locationIcon className="!w-5 !h-5" />
                <span className="font-semibold text-xl">Da Nang</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                68 Xo Viet Nghe Tinh,
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                Hoa Cuong, Da Nang
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                <Icons.phoneIcon className="!w-5 !h-5" />
                <span className="font-semibold text-xl">Contact</span>
              </div>
              <div className="text-base font-normal leading-[26px] text-[#7C89AE]">
                +84 96 450 83 84
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] w-full max-xl:max-w-[700px]">
          <div className="text-[#7C89AE] font-semibold text-2xl mb-4">
            Ready to start your build?
          </div>

          <div className="text-4xl font-semibold leading-12 mb-10">
            Contact@var-meta.com
          </div>

          <nav aria-label="Footer navigation">
            <ul className="text-base leading-[26px] font-normal flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.elId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.elId);
                    }}
                    className="cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-between text-base leading-[26px] font-normal mt-[50px] max-lg:flex-col max-lg:items-start gap-2">
            <div>©2025 Var-meta All Rights Serviced</div>
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
