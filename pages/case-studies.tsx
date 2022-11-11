import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { ContactPage } from "../components/contact/ContactPage";

const CaseStudies: NextPage = () => {
  return (
    <>
      <NextSeo title="Case Studies" />
      <ContactPage />
    </>
  );
};

export default CaseStudies;
