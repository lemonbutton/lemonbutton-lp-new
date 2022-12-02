import Image, { StaticImageData } from "next/image";
import useTranslation from "next-translate/useTranslation";

interface FeatureHCMenuProps {
  imgSrc: StaticImageData;
  header: string;
}





export const FeatureHCMenu: React.FC<FeatureHCMenuProps> = ({ imgSrc, header }) => {
  
  const { t } = useTranslation("features");
  const listElements = [
  
    { title: t("hc_subpage_title_one"), id: "#subpage1" },
    { title: t("hc_subpage_title_two"), id: "#subpage2" },
    { title: t("hc_subpage_title_three"), id: "#subpage3" },
    { title: t("hc_subpage_title_four"), id: "#subpage4" },
  ];
  return (
    <div
      id="header"
      className="font-JetBrainsMono w-full flex flex-col items-start gap-8 p-6 pt-10 md:p-10 2xl:min-h-[36rem]"
    >
      <Image src={imgSrc} alt="healthcare icon" className="brightness-0" />
      <p className="uppercase text-4xl xl:text-5xl 2xl:text-6xl font-medium xl:w-[35rem] 2xl:w-[40rem] leading-[45px] md:leading-[79px]">
        {header}
      </p>
      <div className="border-t-[1px] border-gray-700 w-full" />
      <ul className="md:list-disc font-bold list-inside">
        {listElements.map((element, idx) => (
          <li
            key={element.title + idx}
            className="pb-3 hover:text-white hover:pl-3 transition-all duration-300"
          >
            <button
              className="uppercase text-left"
              onClick={() =>
                document
                  .querySelector(element.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {element.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
