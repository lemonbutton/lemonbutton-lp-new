import cs from "classnames";
import Image from "next/image";
import { useContext } from "react";
import arrowIcon from "../../public/arrowLeft.svg";
import healthcareIcon from "../../public/healthcareIcon.png";
import productIcon from "../../public/productIcon.png";
import { PositionContext } from "../common/Layout";
import { FeatureMenu } from "./FeatureMenu";
import { FeatureSegment } from "./FeatureSegment";

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
          "flex gap-32 px-32 relative transition-all duration-500",
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
        className={cs(
          "absolute transition-all xl:right-[-180px] 2xl:right-[-100px] max-w-xl top-12",
          {
            "opacity-0 duration-300": !isMovedToLeft,
            "duration-[800ms]": isMovedToLeft,
          }
        )}
      >
        <button
          className="uppercase font-JetBrainsMono font-bold pb-10"
          onClick={() => moveContainer()}
        >
          <Image src={arrowIcon} alt="arrow icon" />
          <span className="pl-10">Powrót</span>
        </button>
        <div className="bg-lemon">
          {
            <FeatureMenu
              imgSrc={healthcareIcon}
              header="Healthcare consulting"
            />
          }
        </div>
      </div>
    </>
  );
};
