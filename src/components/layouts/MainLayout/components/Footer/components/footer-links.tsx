"use client";

import { handleScroll } from "@/lib/utils";
import React from "react";
import { FOOTER_LINKS } from "..";

export const FooterLinks = () => {
  return (
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
  );
};
