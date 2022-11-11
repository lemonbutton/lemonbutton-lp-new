import { CaseStudyCard } from "./CaseStudyCard";
import img from "../../public/card-image-1.jpg";

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="font-JetBrainsMono w-full h-full pb-6 px-10 md:px-28 flex flex-col gap-3 md:gap-8 lg:py-20 transition-all duration-200 overflow-scroll">
      <div className="flex flex-col pt-4 lg:pt-0 lg:flex-row justify-start lg:items-end gap-4 md:gap-7">
        <p className="uppercase text-3xl font-medium wow fadeInUp">
          case studies
        </p>
        <button className="uppercase font-bold hover:text-lemon text-start hover:pl-4 transition-all duration-200 wow fadeInUp">
          &#8226; Zobacz wszystkie case studies
        </button>
      </div>
      <hr className="w-full border-black wow fadeInUp pb-5 lg:pb-0" />
      <div className="grid-cols-1 lg:grid-cols-4 grid gap-12 lg:gap-4 wow fadeInUp w-full h-full">
        <CaseStudyCard
          imgSrc={img}
          title="Tytuł zrealizowanego projektu"
          description="Supidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CaseStudyCard
          imgSrc={img}
          title="Tytuł zrealizowanego projektu"
          description="Supidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CaseStudyCard
          imgSrc={img}
          title="Tytuł zrealizowanego projektu"
          description="Supidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CaseStudyCard
          imgSrc={img}
          title="Tytuł zrealizowanego projektu"
          description="Supidatat non proident, sunt in culpa qui quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};
