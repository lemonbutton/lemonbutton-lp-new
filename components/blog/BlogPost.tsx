import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "../common/RichText";

interface BlogPostParams {
  blok: any;
  slug: string;
  slugs: string[];
}

export const BlogPost: React.FC<BlogPostParams> = ({ blok, slug, slugs }) => {
  const { t } = useTranslation("blog");
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
            className="wow fadeInUp"
          />
        </div>
        <p className="basis-full text-3xl lg:text-4xl font-bold wow fadeInUp">
          {blok.title}
        </p>
      </div>
      <div className="wow fadeInUp">
        <RichText document={blok.content} />
      </div>
      <div className="flex justify-start lg:justify-between gap-2 flex-col lg:flex-row wow fadeInUp pt-16">
        <Link href={previousPost}>
          <button className="uppercase text-start font-bold hover:text-lemon transition-all duration-200 hover:pl-4">
            &#8226; {t("button_previous_article")}
          </button>
        </Link>
        <Link href={nextPost}>
          <button className="uppercase font-bold text-start hover:text-lemon transition-all duration-200 hover:ml-4">
            &#8226; {t("button_next_article")}
          </button>
        </Link>
      </div>
    </div>
  );
};
