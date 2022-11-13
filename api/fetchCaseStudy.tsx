import { getContentVersion } from "../lib/storyblok/getContentVersion";
import { getStoryblokApi } from "@storyblok/react";

interface FetchPostParams {
  slug: string;
}

export const fetchPost = async ({ slug }: FetchPostParams) => {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/casestudies/${slug}`, {
    version: getContentVersion(),
  });

  return data;
};
