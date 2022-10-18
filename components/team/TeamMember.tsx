import Image, { StaticImageData } from "next/image";
import img from "../../public/linkedin.png";

interface TeamMemberProps {
  imgSrc: StaticImageData;
  name: string;
  position: string;
  info: string;
  phone: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  imgSrc,
  name,
  position,
  info,
  phone,
}) => {
  return (
    <div className="font-JetBrainsMono basis-1/4 flex flex-col gap-2 md:p-3 pb-16 wow fadeInRight">
      <Image src={imgSrc} alt={`photo of ${name}`} width={400} height={400} />
      <p className="font-medium text-2xl uppercase leading-8 pt-2">{name}</p>
      <p className="font-bold text-sm uppercase tracking-[0.15em]">
        {position}
      </p>
      <p className="text-zinc-500 pb-2 text-sm font-light">{info}</p>
      <div className="flex pt-4 border-t-[1px] border-gray-700">
        <Image
          className="mr-3"
          src={img}
          alt="linkedin icon"
          width={15}
          height={15}
          layout="fixed"
          objectFit="contain"
        />
        <div className="border-l-[1px] border-gray-700 mx-3" />
        <span className="text-sm -tracking-widest pr-2">TEL:</span>
        <span className="text-sm -tracking-widest">{phone}</span>
      </div>
    </div>
  );
};
