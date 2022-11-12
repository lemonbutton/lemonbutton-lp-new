import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { fetchCaseStudies } from "../../api/fetchCaseStudies";
import { fetchPosts } from "../../api/fetchPosts";
import { CaseStudiesPage } from "../../components/case-studies/CaseStudiesPage";

interface CaseStudiesProps {
  caseStudies: any[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  return (
    <>
      <NextSeo title="Case studies" />
      <CaseStudiesPage caseStudies={caseStudies[0]} />
    </>
  );
};

export const getStaticProps: GetStaticProps<CaseStudiesProps> = async () => {
  const revalidate = 5 * 60;

  try {
    const limit = 16;
    const { caseStudies, totalElements } = await fetchCaseStudies({ limit });
    const pages = Math.ceil(totalElements / limit);

    const restStudies = await Promise.all(
      Array(pages - 1)
        .fill(0)
        .map(async (_, idx) => {
          const { stories } = await fetchPosts({ limit, page: idx + 2 });
          return stories;
        })
    );

    const allCaseStudies = [caseStudies, ...restStudies];

    return {
      props: { caseStudies: allCaseStudies },
      revalidate,
    };
  } catch (error) {
    console.error(error);
    return {
      revalidate,
      notFound: true,
    };
  }
};

export default CaseStudies;
