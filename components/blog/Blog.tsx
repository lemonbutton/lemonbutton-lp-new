import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { BlogCard } from "./BlogCard";

interface BlogParams {
  stories: any[];
}

export const Blog: React.FC<BlogParams> = ({ stories }) => {
  const { t } = useTranslation("blog");
  const [showAllStories, setShowAllStories] = useState(false);
  return (
    <div className="font-JetBrainsMono w-full h-full pb-6 px-10 md:px-28 flex flex-col gap-3 md:gap-8 lg:pb-0 lg:py-20 transition-all duration-200 overflow-scroll">
      <div className="flex flex-col pt-4 lg:pt-10 lg:flex-row justify-start lg:items-end gap-4 md:gap-7">
        <p className="uppercase text-3xl font-medium wow fadeInUp">
          {t("blog")}
        </p>
        <button
          onClick={() => setShowAllStories(!showAllStories)}
          className="uppercase font-bold hover:text-lemon text-start hover:pl-4 transition-all duration-200 wow fadeInUp"
        >
          &#8226; {t("button_see_all")}
        </button>
      </div>
      <hr className="w-full border-black wow fadeInUp pb-5 lg:pb-0" />
      <div className="grid-cols-1 lg:grid-cols-4 grid gap-12 lg:gap-8 wow fadeInUp">
        {stories.map((story) => (
          <BlogCard
            key={story.uuid}
            imgSrc={`https:${story.content.image}`}
            title={story.content.title}
            blogPostId={story.slug}
          />
        ))}
        {showAllStories &&
          stories.map((story) => (
            <BlogCard
              key={story.uuid}
              imgSrc={`https:${story.content.image}`}
              title={story.content.title}
              blogPostId={story.slug}
            />
          ))}
        {showAllStories &&
          stories.map((story) => (
            <BlogCard
              key={story.uuid}
              imgSrc={`https:${story.content.image}`}
              title={story.content.title}
              blogPostId={story.slug}
            />
          ))}
      </div>
    </div>
  );
};
