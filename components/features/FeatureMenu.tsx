import Image, { StaticImageData } from "next/image";

interface FeatureMenuProps {
  imgSrc: StaticImageData;
  header: string;
}

const listElements = [
  "Subpage number 1",
  "Subpage number 2 with some long, and long name",
  "dolore sit elit magna validatun",
  "Subpage nr 4",
];

export const FeatureMenu: React.FC<FeatureMenuProps> = ({ imgSrc, header }) => {
  return (
    <div className="font-JetBrainsMono basis-1/2 flex flex-col items-start gap-8 p-10 2xl:min-h-[36rem]">
      <Image src={imgSrc} alt="healthcare icon" className="brightness-0" />
      <p className="uppercase xl:text-5xl 2xl:text-6xl font-medium xl:w-[35rem] 2xl:w-[40rem] leading-[79px]">
        {header}
      </p>
      <div className="border-t-[1px] border-gray-700 w-full" />
      <ul className="list-disc font-bold list-inside">
        {listElements.map((element, idx) => (
          <li
            key={element + idx}
            className="pb-3 hover:text-white hover:pl-3 transition-all duration-300"
          >
            <button className="uppercase">{element}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
