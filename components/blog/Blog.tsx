import { BlogCard } from "./BlogCard";

interface BlogParams {
  stories: any[];
}

export const Blog: React.FC<BlogParams> = ({ stories }) => {
  console.log(stories);

  return (
    <div className="font-JetBrainsMono w-full h-full py-20 px-28 flex flex-col gap-8">
      <p className="uppercase text-3xl font-medium">Blog</p>
      <hr className="w-full border-black" />
      <div className="flex gap-8">
        {stories.map((story) => (
          <BlogCard
            key={story.uuid}
            imgSrc={`https:${story.content.image}`}
            title={story.content.title}
            content={story.content.content}
          />
        ))}
        {stories.map((story) => (
          <BlogCard
            key={story.uuid}
            imgSrc={`https:${story.content.image}`}
            title={story.content.title}
            content={story.content.content}
          />
        ))}
      </div>
    </div>
  );
};
