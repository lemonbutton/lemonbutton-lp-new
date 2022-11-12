import cs from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useContext, useEffect, useState } from "react";
import healthcareIcon from "../../public/healthcareIcon.png";
import productIcon from "../../public/productIcon.png";
import { PositionContext } from "../common/Layout";
import { MovableContainer } from "../common/MovableContainer";
import { SideBackButton } from "../common/SideBackButton";
import { FeatureMenu } from "./FeatureMenu";
import { FeatureSegment } from "./FeatureSegment";
import { FeatureText } from "./FeatureText";

export const FeaturesPage: React.FC = () => {
  const { isMovedToLeft, moveContainer } = useContext(PositionContext);
  const [isMobileView, setIsMobileView] = useState(false);
  const { t } = useTranslation("features");

  useEffect(
    () => setIsMobileView(window.matchMedia("(max-width: 768px)").matches),
    []
  );

  return (
    <>
      <MovableContainer className="md:flex-row gap-20 md:gap-32 px-8 md:px-32 relative">
        <>
          <FeatureSegment
            imgSrc={healthcareIcon}
            header={t("healthcare_consulting")}
            boldText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            firstParagraph="Ut enim ad minim veniam, excepteur sint occaecat cupidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            secondParagraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <FeatureSegment
            imgSrc={productIcon}
            header={t("product_management")}
            boldText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            firstParagraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            secondParagraph="Duis aute irure dolor in reprehenderit in voluptate velit sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </>
      </MovableContainer>
      <div
        id="backButton"
        className={cs(
          "absolute transition-all md:right-[-180px] 2xl:right-[-100px] md:max-w-xl top-12 p-8 md:p-0",
          {
            "opacity-0 duration-300 md:left-0": !isMovedToLeft,
            "duration-[800ms]": isMovedToLeft,
          }
        )}
      >
        <SideBackButton />
        <div className="bg-lemon z-10">
          {
            <FeatureMenu
              imgSrc={healthcareIcon}
              header="Healthcare consulting"
            />
          }
        </div>
        {isMobileView && (
          <div className={cs("md:hidden", { hidden: !isMovedToLeft })}>
            <FeatureText />
          </div>
        )}
      </div>
      <div className="relative z-0 hidden md:block">
        <div className="fixed top-0 md:w-2/3 h-full">
          <FeatureText />
        </div>
      </div>
    </>
  );
};
