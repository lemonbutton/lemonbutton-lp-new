import Image, { StaticImageData } from "next/image";
import { MemberContact } from "./MemberContact";
import cs from "classnames";
import { useContext } from "react";
import { PositionContext } from "../common/Layout";

interface TeamMemberProps {
  imgSrc: StaticImageData;
  name: string;
  position: string;
  info: string;
  phone: string;
  onClick(): void;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  imgSrc,
  name,
  position,
  info,
  phone,
  onClick,
}) => {
  const { isMovedToLeft } = useContext(PositionContext);

  return (
    <div
      className={cs(
        "font-JetBrainsMono basis-1/4 flex flex-col gap-2 md:p-3 pb-16 wow fadeInUp md:fadeInRight cursor-pointer duration-300 transition-all hover:bg-lemon z-20",
        {
          "pointer-events-none": isMovedToLeft,
        }
      )}
      onClick={onClick}
    >
      <Image
        src={imgSrc}
        objectFit="cover"
        alt={`photo of ${name}`}
        width={400}
        height={400}
      />
      <p className="font-medium text-2xl uppercase leading-8 pt-2">{name}</p>
      <p className="font-bold text-sm uppercase tracking-[0.15em]">
        {position}
      </p>
      <p className="text-zinc-500 pb-2 text-sm font-light">{info}</p>
      <div className="border-t-[1px] border-gray-700 mb-4" />
      <MemberContact phone={phone} />
    </div>
  );
};
