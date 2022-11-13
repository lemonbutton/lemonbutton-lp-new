import { getContentVersion } from "../lib/storyblok/getContentVersion";
import { getStoryblokApi } from "@storyblok/react";

interface FetchCaseStudyParams {
  slug: string;
}

export const fetchCaseStudy = async ({ slug }: FetchCaseStudyParams) => {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/casestudies/${slug}`, {
    version: getContentVersion(),
  });

  return data;
};
