import Image from "next/image";
import Link from "next/link";
import { RichText } from "../common/RichText";

interface BlogCardProps {
  imgSrc: string;
  title: string;
  content: any;
  blogPostId: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  imgSrc,
  title,
  content,
  blogPostId,
}) => {
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
      <p className="p-2 text-xl">{title}</p>
      {/* <RichText document={content} /> */}
      <Link
        href={{
          pathname: "blog/[blogPostId]",
          query: { blogPostId: blogPostId ?? "" },
        }}
      >
        <button className="uppercase font-bold hover:text-lemon transition-all duration-200 hover:pl-4 pl-2">
          &#8226; Czytaj artykuł
        </button>
      </Link>
    </div>
  );
};
