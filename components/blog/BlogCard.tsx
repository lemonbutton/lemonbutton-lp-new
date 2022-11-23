import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { PositionContext } from "../common/Layout";

interface BlogCardProps {
  imgSrc: string;
  title: string;
  blogPostId: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  imgSrc,
  title,
  blogPostId,
}) => {
  const { resetContainer } = useContext(PositionContext);
  const { t } = useTranslation("blog");
  return (
    <div className="font-JetBrainsMono">
      <div className="w-full h-60 relative">
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt="blogPost img"
        />
      </div>
      <p className="py-2 text-xl">{title}</p>
      <Link
        href={{
          pathname: "blog/[blogPostId]",
          query: { blogPostId: blogPostId ?? "" },
        }}
      >
        <button
          className="uppercase font-bold hover:text-lemon transition-all duration-200 hover:pl-2"
          onClick={() => resetContainer()}
        >
          &#8226; {t("button_read_article")}
        </button>
      </Link>
    </div>
  );
};
