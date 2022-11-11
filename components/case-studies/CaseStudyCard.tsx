import Image, { StaticImageData } from "next/image";
import img from "../../public/card-image-1.jpg";

interface CaseStudyCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="w-full h-full group bg-lemon relative text-white hover:text-black transition-all duration-300 font-JetBrainsMono group-hover:border-t-zinc-700 hover:cursor-pointer min-h-[20rem] ">
      <div className="z-20 absolute p-6 top-1/4 pointer-events-none flex flex-col gap-4">
        <p className="font-medium">{title}</p>
        <div className="border-t-[1px] border-t-white group-hover:border-t-zinc-700 duration-300 transition-all" />
        <p className="text-xs font-light">{description}</p>
      </div>
      <Image
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt="image of case study"
        className="brightness-50 hover:opacity-0 transition-all duration-300 z-10"
      />
    </div>
  );
};
