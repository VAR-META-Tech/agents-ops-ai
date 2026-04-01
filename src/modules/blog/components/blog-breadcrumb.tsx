import { Icons } from "@/assets/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const BlogBreadcrumb = ({ title }: { title: string }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="flex items-center gap-1">
          <Icons.homeLine />
          <Link
            href="/"
            className="text-[#494949] text-base font-normal leading-4 hover:underline"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#494949] text-base" />
        <BreadcrumbItem
          className={cn(
            "bg-[linear-gradient(to_right,#8F006E_0%,#65009B_50%,#3729FA_100%)] bg-clip-text text-transparent",
            "text-base font-bold leading-[26px]",
          )}
        >
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
