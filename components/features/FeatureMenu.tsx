import Image, { StaticImageData } from "next/image";

interface FeatureMenuProps {
  imgSrc: StaticImageData;
  header: string;
}

const listElements = [
  { title: "Subpage number 1", id: "#subpage1" },
  { title: "Subpage number 2 with some long, and long name", id: "#subpage2" },
  { title: "dolore sit elit magna validatun", id: "#subpage3" },
  { title: "Subpage nr 4", id: "#subpage4" },
];

export const FeatureMenu: React.FC<FeatureMenuProps> = ({ imgSrc, header }) => {
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
