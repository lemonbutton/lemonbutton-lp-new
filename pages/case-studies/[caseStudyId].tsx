import { storyblokEditable, useStoryblokState } from "@storyblok/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { fetchCaseStudies } from "../../api/fetchCaseStudies";
import { fetchCaseStudy } from "../../api/fetchCaseStudy";
import { CaseStudy } from "../../components/case-studies/CaseStudy";

interface CaseStudyPageProps {
  story: any;
  slugs: string[];
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  story: initialStory,
  slugs,
}) => {
  const story = useStoryblokState(initialStory);
  const blok: any = story.content;

  return (
    <>
      <NextSeo title={blok.title} />
      <div
        {...storyblokEditable(blok)}
        key={blok._uid}
        className="w-full h-full overflow-scroll"
      >
        <CaseStudy blok={blok} slug={story.slug} slugs={slugs} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<CaseStudyPageProps> = async (
  ctx
) => {
  const slug = ctx.params?.["caseStudyId"] as string;
  const revalidate = 5 * 60;

  try {
    const data = await fetchCaseStudy({ slug });
    const { caseStudies } = await fetchCaseStudies();

    const slugs = caseStudies.map((story: any) => story.slug);

    return {
      props: { story: data.story, slugs },
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default CaseStudyPage;
