import cs from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useContext, useEffect, useState } from "react";
import img from "../../public/card-image-1.jpg";
import { HiddenContainer } from "../common/HiddenContainer";
import { PositionContext } from "../common/Layout";
import { MovableContainer } from "../common/MovableContainer";
import { CaseStudyCard } from "./CaseStudyCard";

interface CaseStudiesPageProps {
  caseStudies: any[];
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  caseStudies,
}) => {
  console.log({ caseStudies });
  const { isMovedToLeft, moveContainer } = useContext(PositionContext);
  const { t } = useTranslation("case-studies");
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(
    () => setIsMobileView(window.matchMedia("(max-width: 768px)").matches),
    []
  );
  return (
    <>
      <MovableContainer
        className="w-full h-full pb-6 px-10 md:px-28 gap-3 md:gap-8 lg:py-20"
        flexDirection="col"
      >
        <>
          <div className="flex flex-col pt-4 lg:pt-0 lg:flex-row justify-start lg:items-end gap-4 md:gap-7">
            <p className="uppercase text-3xl font-medium wow fadeInUp">
              {t("case_studies")}
            </p>
            <button
              className="uppercase font-bold hover:text-lemon text-start hover:pl-4 transition-all duration-200 wow fadeInUp"
              onClick={() => moveContainer()}
            >
              &#8226; {t("see_all_studies")}
            </button>
          </div>
          <hr className="w-full border-black wow fadeInUp pb-5 lg:pb-0" />
          <div className="grid-cols-1 lg:grid-cols-4 grid gap-12 lg:gap-4 wow fadeInUp w-full h-full">
            {[...caseStudies].slice(0, 4).map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.uuid}
                title={caseStudy.content.title}
                imgSrc={`https:${caseStudy.content.image}`}
                description={caseStudy.content.Intro}
              />
            ))}
          </div>
        </>
      </MovableContainer>
      <HiddenContainer className="md:right-[-80px] 2xl:right-[-40px]">
        <>
          <div className="bg-lemon z-10 flex flex-col p-10 md:pr-24 gap-8 md:min-h-[28rem] 2xl:min-h-[36rem] max-w-[28rem] font-JetBrainsMono">
            <p className="uppercase text-4xl font-medium">Case studies</p>
            <div className="border-t-[1px] w-full border-zinc-700"></div>
            <p>
              Supidatat non proident, sunt in culpa qui quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          {isMobileView && (
            <div
              className={cs("md:hidden grid grid-cols-1 mt-12 gap-8", {
                hidden: !isMovedToLeft,
              })}
            ></div>
          )}
        </>
      </HiddenContainer>
      <div
        className={cs("relative z-0 hidden md:block", {
          "opacity-0 duration-300": !isMovedToLeft,
          "duration-[800ms]": isMovedToLeft,
        })}
      >
        <div className="fixed top-0 md:w-2/3 h-full overflow-scroll grid grid-cols-3 pl-32 gap-4 gap-y-12 pt-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.uuid}
              title={caseStudy.content.title}
              imgSrc={`https:${caseStudy.content.image}`}
              description={caseStudy.content.Intro}
            />
          ))}
        </div>
      </div>
    </>
  );
};
