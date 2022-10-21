import cs from "classnames";
import Image from "next/image";
import { useContext } from "react";
import arrowIcon from "../../public/arrowLeft.svg";
import healthcareIcon from "../../public/healthcareIcon.png";
import productIcon from "../../public/productIcon.png";
import { PositionContext } from "../common/Layout";
import { FeatureMenu } from "./FeatureMenu";
import { FeatureSegment } from "./FeatureSegment";
import { FeatureText } from "./FeatureText";

interface FeaturePageProps {
  type: "healthcare" | "product";
}

export const FeaturesPage: React.FC<FeaturePageProps> = ({ type }) => {
  const { isMovedToLeft, moveContainer } = useContext(PositionContext);

  const renderMenu = () => {
    if (type === "healthcare") {
      return (
        <FeatureMenu imgSrc={healthcareIcon} header="Healthcare consulting" />
      );
    }
    return <FeatureMenu imgSrc={productIcon} header="Product management" />;
  };

  return (
    <>
      <div
        className={cs(
          "flex flex-col md:flex-row gap-20 md:gap-32 px-8 md:px-32 relative transition-all duration-500",
          {
            "opacity-0": isMovedToLeft,
          }
        )}
      >
        <FeatureSegment
          imgSrc={healthcareIcon}
          header="Healthcare consulting"
          boldText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          firstParagraph="Ut enim ad minim veniam, excepteur sint occaecat cupidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          secondParagraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <FeatureSegment
          imgSrc={productIcon}
          header="Product management"
          boldText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          firstParagraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          secondParagraph="Duis aute irure dolor in reprehenderit in voluptate velit sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div
        id="backButton"
        className={cs(
          "absolute transition-all xl:right-[-180px] 2xl:right-[-100px] md:max-w-xl top-12 p-8 md:p-0",
          {
            "opacity-0 duration-300": !isMovedToLeft,
            "duration-[800ms]": isMovedToLeft,
          }
        )}
      >
        <button
          id="backButton"
          className="uppercase font-JetBrainsMono font-bold pb-6 pt-6 md:pb-10 md:pt-0"
          onClick={() => moveContainer()}
        >
          <Image src={arrowIcon} alt="arrow icon" />
          <span className="pl-10">Powrót</span>
        </button>
        <div className="bg-lemon z-10">
          {
            <FeatureMenu
              imgSrc={healthcareIcon}
              header="Healthcare consulting"
            />
          }
        </div>
        <div className={cs("md:hidden", { hidden: !isMovedToLeft })}>
          <FeatureText />
        </div>
      </div>
      <div className="relative z-0 overflow-hidden invisible md:visible">
        <div className="fixed top-0 md:w-2/3 h-full">
          <FeatureText />
        </div>
      </div>
    </>
  );
};
