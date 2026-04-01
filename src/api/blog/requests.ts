import { blogRequest } from "../blogAxios";
import { BlogResponse } from "./responses";
import type { IBlogDTOResponse, IBlogResponse } from "./types";

export const getPostBySlug = async (slug: string | string[]): Promise<IBlogResponse> => {
  try {
    const slugParam = Array.isArray(slug) ? slug.join("/") : slug;
    const { data } = await blogRequest.get<IBlogDTOResponse>(
      `/posts`,
      { params: { slug: slugParam } }
    );
    const post = Array.isArray(data) ? data[0] : data;
    if (!post) {
      throw new Error("Post not found");
    }
    return new BlogResponse(post, "", "");
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getAllPosts = async (): Promise<IBlogResponse[]> => {
  try {
    const { data } = await blogRequest.get<IBlogDTOResponse[]>(`/posts`);
    return Array.isArray(data) ? data.map((post) => new BlogResponse(post, "", "")) : [];
  } catch (error) {
    console.error({ error });
    throw error;
  }
};