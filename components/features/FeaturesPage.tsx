import cs from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useContext, useEffect, useState } from "react";
import healthcareIcon from "../../public/healthcareIcon.png";
import productIcon from "../../public/productIcon.png";
import { HiddenContainer } from "../common/HiddenContainer";
import { PositionContext } from "../common/Layout";
import { MovableContainer } from "../common/MovableContainer";
import { FeatureHCMenu } from "./FeatureHCMenu";
import { FeaturePMMenu } from "./FeaturePMMenu";
import { FeatureHCSegment } from "./FeatureHCSegment";
import { FeaturePMSegment } from "./FeaturePMSegment";
import { FeatureHCText } from "./FeatureHCText";
import { FeaturePMText } from "./FeaturePMText";

export const FeaturesPage: React.FC = () => {
  const { isMovedToLeft } = useContext(PositionContext);
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentView, setIsCurrentView] = useState("HC");
  const { t } = useTranslation("features");

  useEffect(
    () => setIsMobileView(window.matchMedia("(max-width: 768px)").matches),
    []
  );

  return (
    <>
      <MovableContainer
        className="md:flex-row gap-20 md:gap-32 px-8 md:px-32 relative"
        flexDirection="col"
      >
        <>
          <FeatureHCSegment
            imgSrc={healthcareIcon}
            header={t("healthcare_consulting")}
            boldText={t("hc_bold_text")}
            firstParagraph={t("hc_first_paragraph")}
            secondParagraph={t("hc_second_paragraph")}
            onbuttonclick={setIsCurrentView}
          />
          <FeaturePMSegment
            imgSrc={productIcon}
            header={t("product_management")}
            boldText={t("pm_bold_text")}
            firstParagraph={t("pm_first_paragraph")}
            secondParagraph={t("pm_second_paragraph")}
            onbuttonclick={setIsCurrentView}
          />
        </>
      </MovableContainer>
      <HiddenContainer className="md:right-[-180px]">
        <>
          <div className="bg-lemon z-10">
            {
              currentView === "HC" && 
              <FeatureHCMenu
                imgSrc={healthcareIcon}
                header="Healthcare consulting"
              />
            }
            {
              currentView === "PM" && 
              <FeaturePMMenu
                imgSrc={productIcon}
                header="Product Managemnt"
              />
            }
          </div>
          {isMobileView && (
            <div className={cs("md:hidden", { hidden: !isMovedToLeft })}>
              {
                currentView === "HC" && 
                <FeatureHCText />
              }
              {
                currentView === "PM" && 
                <FeaturePMText />
              }
            </div>
          )}
        </>
      </HiddenContainer>
      <div className="relative z-0 hidden md:block">
        <div className="fixed top-0 md:w-2/3 h-full">
        {
                currentView === "HC" && 
                <FeatureHCText />
              }
              {
                currentView === "PM" && 
                <FeaturePMText />
              }
        </div>
      </div>
    </>
  );
};
