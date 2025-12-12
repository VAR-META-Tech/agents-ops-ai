import { Icons } from "@/assets/icons";
import { CommonButton } from "@/components/common/common-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import { ContactBtn } from "./components/contact-btn";
import { HeaderLinks } from "./components/header-links";
import { HeaderMobileLinks } from "./components/header-mobile-links";

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
        <HeaderLinks />

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
            <HeaderMobileLinks />
          </DropdownMenuContent>
        </DropdownMenu>

        <ContactBtn />
      </nav>
    </header>
  );
};
