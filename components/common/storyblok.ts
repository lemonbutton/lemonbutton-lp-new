import { storyblokInit, apiPlugin } from "@storyblok/react";

export const initStoryblok = () => {
  storyblokInit({
    accessToken: process.env["NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN"],
    use: [apiPlugin],
  });
};