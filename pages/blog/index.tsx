import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { fetchPosts } from "../../api/fetchPosts";
import { Blog } from "../../components/blog/Blog";

interface BlogPageProps {
  stories: any[];
}

const BlogPage: React.FC<BlogPageProps> = ({ stories }) => {
  return (
    <>
      <NextSeo title="Blog" />
      <Blog stories={stories[0]} />
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const revalidate = 5 * 60;

  try {
    const limit = 8;
    const { stories, totalElements } = await fetchPosts({ limit });
    const pages = Math.ceil(totalElements / limit);

    const restStories = await Promise.all(
      Array(pages - 1)
        .fill(0)
        .map(async (_, idx) => {
          const { stories } = await fetchPosts({ limit, page: idx + 2 });
          return stories;
        })
    );

    const allStories = [stories, ...restStories];

    return {
      props: { stories: allStories },
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

export default BlogPage;
