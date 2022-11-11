import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { TeamPage } from "../components/team/TeamPage";

const Team: NextPage = () => {
  return (
    <>
      <NextSeo title="Team" />
      <TeamPage />
    </>
  );
};

export default Team;
