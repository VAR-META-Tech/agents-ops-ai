import { getAllPosts } from "@/api/blog/requests";
import React from "react";
import { BlogAccordion } from "./blog-accordion";

export const BlogList = async () => {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No posts found</p>
    );
  }

  return <BlogAccordion posts={posts} />;
};
