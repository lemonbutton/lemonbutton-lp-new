import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useContext } from "react";
import arrowIcon from "../../public/arrowLeft.svg";
import { PositionContext } from "./Layout";

export const SideBackButton: React.FC = () => {
  const { moveContainer } = useContext(PositionContext);
  const { t } = useTranslation("common");

  return (
    <button
      id="backButton"
      className="uppercase font-JetBrainsMono cursor-pointer font-bold pb-6 pt-6 md:pb-10 md:pt-0 hover:pl-4 duration-300 transition-all"
      onClick={() => moveContainer()}
    >
      <Image src={arrowIcon} alt="arrow icon" />
      <span className="pl-10">{t("button_go_back")}</span>
    </button>
  );
};
