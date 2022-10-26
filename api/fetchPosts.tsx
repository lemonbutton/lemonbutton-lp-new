import { getStoryblokApi } from "@storyblok/react";
import { getContentVersion } from "../lib/storyblok/getContentVersion";

interface FetchPostsParams {
  limit?: number;
  page?: number;
}

export const fetchPosts = async ({
  limit,
  page = 1,
}: FetchPostsParams = {}) => {
  const storyblokApi = getStoryblokApi();

  const { data, ...rest } = await storyblokApi.get(`cdn/stories`, {
    starts_with: "blog/",
    per_page: limit ?? 8,
    version: getContentVersion(),
    page,
  });

  return { stories: data.stories, totalElements: rest.total };
};
