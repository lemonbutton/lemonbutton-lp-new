import { getStoryblokApi } from "@storyblok/react";
import { getContentVersion } from "../lib/storyblok/getContentVersion";

interface FetchCaseStudiesParams {
  limit?: number;
  page?: number;
}

export const fetchCaseStudies = async ({
  limit,
  page = 1,
}: FetchCaseStudiesParams = {}) => {
  const storyblokApi = getStoryblokApi();

  const { data, ...rest } = await storyblokApi.get(`cdn/stories`, {
    starts_with: "casestudies/",
    per_page: limit ?? 16,
    version: getContentVersion(),
    page,
  });

  return { caseStudies: data.stories, totalElements: rest.total };
};
