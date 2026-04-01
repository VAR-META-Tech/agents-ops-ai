import { useQuery, type UseQueryResult } from "@tanstack/react-query";

import { getAllPosts, getPostBySlug } from "./requests";
import type { IBlogResponse } from "./types";

export function usePost(slug: string): UseQueryResult<IBlogResponse, Error> {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });
}

export function usePosts(): UseQueryResult<IBlogResponse[], Error> {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
}
