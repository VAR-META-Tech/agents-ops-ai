"use client";

import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { handleScroll } from "@/lib/utils";
import React from "react";
import { NAV_LINKS } from "..";

export const HeaderMobileLinks = () => {
  return (
    <DropdownMenuGroup>
      {NAV_LINKS.map((link) => (
        <DropdownMenuItem
          key={link.label}
          className="cursor-pointer p-1 text-base hover:bg-[#dadada]"
        >
          <span onClick={() => handleScroll(link.elId)}>{link.label}</span>
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  );
};
