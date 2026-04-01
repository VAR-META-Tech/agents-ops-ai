import { CommonTitle } from "@/components/common/common-title";
import { cn } from "@/lib/utils";
import React from "react";
import { BlogList } from "./components/blog-list";

export const FQA = async () => {
  return (
    <div className="bg-white px-6">
      <div className="max-w-[1280px] mx-auto pb-20 pt-36">
        <div className="mb-10 pl-6 max-md:pl-3">
          <CommonTitle as="h2" className="max-lg:text-3xl text-center">
            FQA
          </CommonTitle>
        </div>

        <BlogList />
      </div>
    </div>
  );
};
