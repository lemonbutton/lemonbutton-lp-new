import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "../common/RichText";

interface CaseStudyProps {
  blok: any;
  slug: string;
  slugs: string[];
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ blok, slug, slugs }) => {
  const { t } = useTranslation("case-studies");
  const index = slugs.indexOf(slug, 0);
  const previousPost = index === 0 ? "/case-studies" : slugs[index - 1];

  const nextPost =
    index !== slugs.length - 1 ? slugs[index + 1] : "/case-studies";
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
      <div className="flex justify-start lg:justify-between gap-2 flex-col lg:flex-row pt-16">
        <Link href={previousPost}>
          <button className="uppercase text-start font-bold hover:text-lemon transition-all duration-200 hover:pl-4">
            &#8226; {t("button_previous_case_study")}
          </button>
        </Link>
        <Link href={nextPost}>
          <button className="uppercase font-bold text-start hover:text-lemon transition-all duration-200 hover:ml-4">
            &#8226; {t("button_next_case_study")}
          </button>
        </Link>
      </div>
    </div>
  );
};
