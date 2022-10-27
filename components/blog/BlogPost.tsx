import Image from "next/image";
import { RichText } from "../common/RichText";

interface BlogPostParams {
  blok: any;
  slug: string;
  slugs: string[];
}

export const BlogPost: React.FC<BlogPostParams> = ({ blok, slug, slugs }) => {
  const index = slugs.indexOf(slug, 0);
  const previousPost = index === 0 ? "/blog" : slugs[index - 1];

  const nextPost = index !== slugs.length - 1 ? slugs[index + 1] : "/blog";

  return (
    <div className="py-8 lg:py-16 px-10 xl:px-60 font-JetBrainsMono">
      <div className="flex flex-col gap-8 pb-8 lg:pb-10">
        <div className="w-full h-[25vh] xl:h-[40vh] relative">
          <Image
            layout="fill"
            priority
            objectFit="cover"
            src={`https:${blok.image}`}
            alt="temp"
          />
        </div>
        <p className="basis-full text-3xl lg:text-4xl font-bold">
          {blok.title}
        </p>
      </div>
      <div>
        <RichText document={blok.content} />
      </div>
    </div>
  );
};
