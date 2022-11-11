import Image from "next/image";
import { MemberContact } from "./MemberContact";
import img1 from "../../public/team1.png";

interface ActiveTeamMemberProps {
  name: string;
  phone: string;
}

export const ActiveTeamMember: React.FC<ActiveTeamMemberProps> = ({
  name,
  phone,
}) => {
  return (
    <div className="bg-lemon font-JetBrainsMono flex flex-col gap-4 md:min-w-[30rem] min-h-[20rem] p-10 justify-end relative mt-28">
      <div className="absolute w-60 h-60 top-[-100px]">
        <Image
          src={img1}
          layout="fill"
          objectFit="cover"
          alt={`picture of ${name}`}
        />
      </div>
      <p className="uppercase font-medium text-2xl md:text-3xl">{name}</p>
      <div className="border-t-[1px] border-gray-700" />
      <MemberContact phone={phone} />
    </div>
  );
};
