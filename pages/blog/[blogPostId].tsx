import { storyblokEditable, useStoryblokState } from "@storyblok/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchPost } from "../../api/fetchPost";
import { fetchPosts } from "../../api/fetchPosts";
import { BlogPost } from "../../components/blog/BlogPost";

interface BlogPageProps {
  story: any;
  slugs: string[];
}

const BlogPostPage: React.FC<BlogPageProps> = ({
  story: initialStory,
  slugs,
}) => {
  const story = useStoryblokState(initialStory);
  const blok: any = story.content;

  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="w-full h-full overflow-scroll"
    >
      <BlogPost blok={blok} slug={story.slug} slugs={slugs} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (ctx) => {
  const slug = ctx.params?.["blogPostId"] as string;
  const revalidate = 5 * 60;

  try {
    const data = await fetchPost({ slug });
    const { stories } = await fetchPosts();

    const slugs = stories.map((story: any) => story.slug);

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

export default BlogPostPage;
