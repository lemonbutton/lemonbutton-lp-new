import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CaseStudiesPage } from "../components/case-studies/CaseStudiesPage";

const CaseStudies: NextPage = () => {
  return (
    <>
      <NextSeo title="Case Studies" />
      <CaseStudiesPage />
    </>
  );
};

export default CaseStudies;
