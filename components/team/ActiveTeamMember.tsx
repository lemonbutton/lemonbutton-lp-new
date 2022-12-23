import Image from "next/image";
import { MemberContact } from "./MemberContact";
import img1 from "../../public/aga.webp";
import img2 from "../../public/team2.png";
import img3 from "../../public/team3.png";
import img4 from "../../public/team4.png";
import { TeamMembers } from "./TeamMembers";

interface ActiveTeamMemberProps {
  member: TeamMembers;
}

export const ActiveTeamMember: React.FC<ActiveTeamMemberProps> = ({
  member,
}) => {
  const renderImage = () => {
    switch (member) {
      case TeamMembers.TEMP1:
        return (
          <Image
            src={img1}
            layout="fill"
            objectFit="cover"
            className="wow fadeInUp"
            alt={`picture of ${TeamMembers.TEMP1}`}
          />
        );
      case TeamMembers.TEMP2:
        return (
          <Image
            src={img2}
            layout="fill"
            objectFit="cover"
            className="wow fadeInUp"
            alt={`picture of ${TeamMembers.TEMP2}`}
          />
        );
      case TeamMembers.TEMP3:
        return (
          <Image
            src={img3}
            layout="fill"
            objectFit="cover"
            className="wow fadeInUp"
            alt={`picture of ${TeamMembers.TEMP3}`}
          />
        );
      default:
        return (
          <Image
            src={img4}
            layout="fill"
            objectFit="cover"
            className="wow fadeInUp"
            alt={`picture of ${TeamMembers.TEMP4}`}
          />
        );
    }
  };

  const renderName = () => {
    switch (member) {
      case TeamMembers.TEMP1:
        return "Imię i nazwisko 1";
      case TeamMembers.TEMP2:
        return "Imię i nazwisko 2";
      case TeamMembers.TEMP3:
        return "Imię i nazwisko 3";
      default:
        return "Imię i nazwisko 4";
    }
  };

  const renderPhoneNumber = () => {
    switch (member) {
      case TeamMembers.TEMP1:
        return "+48 123 123 123";
      case TeamMembers.TEMP2:
        return "+48 123 123 123";
      case TeamMembers.TEMP3:
        return "+48 123 123 123";
      default:
        return "+48 123 123 123";
    }
  };

  return (
    <div className="bg-lemon font-JetBrainsMono flex flex-col gap-4 md:min-w-[30rem] min-h-[20rem] 2xl:min-h-[28rem] p-10 justify-end relative mt-28  wow fadeInUp">
      <div className="absolute w-60 h-60 top-[-100px] wow fadeInUp 2xl:w-80 2xl:h-80">
        {renderImage()}
      </div>
      <p className="uppercase font-medium text-2xl md:text-3xl">
        {renderName()}
      </p>
      <div className="border-t-[1px] border-gray-700" />
      <MemberContact phone={renderPhoneNumber()} />
    </div>
  );
};
