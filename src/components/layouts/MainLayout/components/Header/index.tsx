"use client";

import { Icons } from "@/assets/icons";
import { CommonButton } from "@/components/common/common-button";
import { handleScroll } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";

export const NAV_LINKS = [
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

export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-[1280px] h-[92px] mx-auto max-2xl:px-6">
      <div>
        <Icons.agentOpsLogo />
      </div>

      <nav
        className="flex items-center justify-end gap-4 w-full max-xl:justify-end"
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-5 font-medium text-base max-xl:hidden">
          {NAV_LINKS.map((link) => (
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <CommonButton
              className="rounded-xl w-11 h-11 hidden items-center justify-center max-xl:block"
              variant="outline"
            >
              <MenuIcon />
            </CommonButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-white border border-[#E6E6E6] rounded-3xl p-4 mt-3 z-50"
            align="start"
          >
            <DropdownMenuGroup>
              {NAV_LINKS.map((link) => (
                <DropdownMenuItem
                  key={link.label}
                  className="cursor-pointer p-1 text-base hover:bg-[#dadada]"
                >
                  <span onClick={() => handleScroll(link.elId)}>
                    {link.label}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <CommonButton
          className="ml-5 min-w-32 h-11 text-sm !pr-3 !pl-4 gap-1 max-xl:ml-2 max-sm:hidden"
          variant="outline"
          onClick={() => handleScroll("contact")}
        >
          <span>Contact us</span>
          <Icons.arrowUpRightIcon className="!w-5 !h-5" />
        </CommonButton>
      </nav>
    </header>
  );
};
