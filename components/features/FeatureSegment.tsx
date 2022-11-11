import useTranslation from "next-translate/useTranslation";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { PositionContext } from "../common/Layout";

interface FeatureSegmentProps {
  imgSrc: StaticImageData;
  header: string;
  boldText: string;
  firstParagraph: string;
  secondParagraph: string;
}

export const FeatureSegment: React.FC<FeatureSegmentProps> = ({
  imgSrc,
  header,
  boldText,
  firstParagraph,
  secondParagraph,
}) => {
  const { moveContainer, isMovedToLeft } = useContext(PositionContext);
  const { t } = useTranslation("features");
  return (
    <div className="font-JetBrainsMono basis-1/2 flex flex-col items-start gap-8 wow fadeInUp md:fadeInRight">
      <Image src={imgSrc} alt="healthcare icon" />
      <p className="uppercase text-4xl font-medium max-w-[20rem] leading-[47px]">
        {header}
      </p>
      <div className="border-t-[1px] border-gray-700 w-full" />
      <p className="text-sm 2xl:text-base">
        <span className="font-bold">{boldText}</span> {firstParagraph}
        <br />
        <br />
        {secondParagraph}
      </p>
      <button
        className="font-bold uppercase hover:text-lemon duration-300"
        onClick={() => {
          if (window.innerWidth <= 768) {
            document
              .querySelector("#backButton")
              ?.scrollIntoView({ behavior: "smooth" });
          }
          moveContainer();
        }}
      >
        &#8226;{" "}
        <span className="hover:pl-2 duration-100">{t("button_see_more")}</span>
      </button>
    </div>
  );
};
