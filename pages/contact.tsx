import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { ContactPage } from "../components/contact/ContactPage";

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="Contact" />
      <ContactPage />
    </>
  );
};

export default Contact;
