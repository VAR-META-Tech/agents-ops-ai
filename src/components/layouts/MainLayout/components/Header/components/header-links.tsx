"use client";

import { handleScroll } from "@/lib/utils";
import React from "react";
import { NAV_LINKS } from "..";

export const HeaderLinks = () => {
  return (
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
  );
};
