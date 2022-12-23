import cs from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useContext, useEffect, useState } from "react";
import img1 from "../../public/aga.webp";
import img2 from "../../public/team2.png";
import img3 from "../../public/team3.png";
import img4 from "../../public/team4.png";
import { HiddenContainer } from "../common/HiddenContainer";
import { PositionContext } from "../common/Layout";
import { MovableContainer } from "../common/MovableContainer";
import { ActiveTeamMember } from "./ActiveTeamMember";
import { ActiveTeamMemberText } from "./ActiveTeamMemberText";
import { TeamInfo } from "./TeamInfo";
import { TeamMember } from "./TeamMember";
import { TeamMembers } from "./TeamMembers";

export const TeamPage: React.FC = () => {
  const { t } = useTranslation("team");
  const { isMovedToLeft, moveContainer } = useContext(PositionContext);
  const [activeMember, setActiveMember] = useState<TeamMembers>(
    TeamMembers.TEMP1
  );
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(
    () => setIsMobileView(window.matchMedia("(max-width: 768px)").matches),
    []
  );

  return (
    <>
      <MovableContainer className="flex-col md:flex-row items-center">
        <>
          <TeamInfo />
          <div className="md:flex-1 md:flex md:pl-6 md:pr-16 px-16 pt-16 md:pt-0">
            <TeamMember
              onClick={() => {
                moveContainer();
                setActiveMember(TeamMembers.TEMP1);
              }}
              imgSrc={img1}
              name="Agnieszka Leś"
              position=""
              info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              phone="+48 123 123 123"
            />
            <TeamMember
              onClick={() => {
                moveContainer();
                setActiveMember(TeamMembers.TEMP2);
              }}
              imgSrc={img2}
              name="Imię nazwisko"
              position="Stanowisko"
              info="Duis aute irure dolor in reprehenderit in voluptate velit esse."
              phone="+48 123 123 123"
            />
            <TeamMember
              onClick={() => {
                moveContainer();
                setActiveMember(TeamMembers.TEMP3);
              }}
              imgSrc={img3}
              name="Imię nazwisko"
              position="Stanowisko"
              info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Voluptate velit esse cillum dolore eu."
              phone="+48 123 123 123"
            />
            <TeamMember
              onClick={() => {
                moveContainer();
                setActiveMember(TeamMembers.TEMP4);
              }}
              imgSrc={img4}
              name="Imię nazwisko"
              position="Stanowisko"
              info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              phone="+48 123 123 123"
            />
          </div>
        </>
      </MovableContainer>
      <HiddenContainer className="md:right-[-180px]">
        <>
          <div className="bg-lemon z-10">
            <ActiveTeamMember member={activeMember} />
          </div>
          {isMobileView && (
            <div className={cs("md:hidden", { hidden: !isMovedToLeft })}>
              <ActiveTeamMemberText member={activeMember} />
            </div>
          )}
        </>
      </HiddenContainer>
      <div className="relative z-0 hidden md:block">
        <div className="fixed top-0 md:w-2/3 h-full">
          <ActiveTeamMemberText member={activeMember} />
        </div>
      </div>
    </>
  );
};
