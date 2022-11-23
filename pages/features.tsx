import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FeaturesPage } from "../components/features/FeaturesPage";

const Features: NextPage = () => {
  return (
    <>
      <NextSeo title="Features" />
      <FeaturesPage />
    </>
  );
};

export default Features;
