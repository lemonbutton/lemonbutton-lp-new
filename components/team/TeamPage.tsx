import { TeamInfo } from "./TeamInfo";
import { TeamMember } from "./TeamMember";
import img1 from "../../public/team1.png";
import img2 from "../../public/team2.png";
import img3 from "../../public/team3.png";
import img4 from "../../public/team4.png";

export const TeamPage: React.FC = () => {
  return (
    <div className="md:flex md:h-full">
      <TeamInfo />
      <div className="md:flex-1 md:flex md:pl-6 md:pr-16 px-16 pt-16 md:pt-20">
        <TeamMember
          imgSrc={img1}
          name="Imię nazwisko"
          position="Stanowisko"
          info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          phone="+48 123 123 123"
        />
        <TeamMember
          imgSrc={img2}
          name="Imię nazwisko"
          position="Stanowisko"
          info="Duis aute irure dolor in reprehenderit in voluptate velit esse."
          phone="+48 123 123 123"
        />
        <TeamMember
          imgSrc={img3}
          name="Imię nazwisko"
          position="Stanowisko"
          info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Voluptate velit esse cillum dolore eu."
          phone="+48 123 123 123"
        />
        <TeamMember
          imgSrc={img4}
          name="Imię nazwisko"
          position="Stanowisko"
          info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          phone="+48 123 123 123"
        />
      </div>
    </div>
  );
};
