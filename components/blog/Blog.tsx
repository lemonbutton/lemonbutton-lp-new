import useTranslation from "next-translate/useTranslation";
import { useContext, useEffect, useState } from "react";
import { PositionContext } from "../common/Layout";
import { BlogCard } from "./BlogCard";
import cs from "classnames";
import Image from "next/image";
import arrowIcon from "../../public/arrowLeft.svg";
import { SideBackButton } from "../common/SideBackButton";

interface BlogParams {
  stories: any[];
}
export const Blog: React.FC<BlogParams> = ({ stories }) => {
  const { isMovedToLeft, moveContainer } = useContext(PositionContext);
  const { t } = useTranslation("blog");
  const [showAllStories, setShowAllStories] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(
    () => setIsMobileView(window.matchMedia("(max-width: 768px)").matches),
    []
  );
  return (
    <>
      <div
        className={cs(
          "font-JetBrainsMono w-full h-full pb-6 px-10 md:px-28 flex flex-col gap-3 md:gap-8 lg:pb-0 lg:py-20 transition-all duration-500",
          {
            "opacity-0": isMovedToLeft,
          }
        )}
      >
        <div className="flex flex-col pt-4 lg:pt-10 lg:flex-row justify-start lg:items-end gap-4 md:gap-7">
          <p className="uppercase text-3xl font-medium wow fadeInUp">
            {t("blog")}
          </p>
          <button
            onClick={() => moveContainer()}
            className="uppercase font-bold hover:text-lemon text-start hover:pl-4 transition-all duration-200 wow fadeInUp"
          >
            &#8226; {t("button_see_all")}
          </button>
        </div>
        <hr className="w-full border-black wow fadeInUp pb-5 lg:pb-0" />
        <div className="grid-cols-1 lg:grid-cols-4 grid gap-12 lg:gap-8 wow fadeInUp">
          {[...stories].splice(0, 4).map((story) => (
            <BlogCard
              key={story.uuid}
              imgSrc={`https:${story.content.image}`}
              title={story.content.title}
              blogPostId={story.slug}
            />
          ))}
          {showAllStories &&
            stories.map((story) => (
              <BlogCard
                key={story.uuid}
                imgSrc={`https:${story.content.image}`}
                title={story.content.title}
                blogPostId={story.slug}
              />
            ))}
          {showAllStories &&
            stories.map((story) => (
              <BlogCard
                key={story.uuid}
                imgSrc={`https:${story.content.image}`}
                title={story.content.title}
                blogPostId={story.slug}
              />
            ))}
        </div>
      </div>
      <div
        id="backButton"
        className={cs(
          "absolute transition-all md:right-[-80px] 2xl:right-[-100px] md:max-w-xl top-12 p-8 md:p-0 font-JetBrainsMono",
          {
            "opacity-0 duration-300": !isMovedToLeft,
            "duration-[800ms]": isMovedToLeft,
          }
        )}
      >
        <SideBackButton />
        <div className="bg-lemon z-10 flex flex-col p-10 pr-24 gap-8 min-h-[28rem] max-w-[28rem]">
          <p className="uppercase text-4xl font-medium">Blog</p>
          <div className="border-t-[1px] w-full border-zinc-700"></div>
          <p>
            Supidatat non proident, sunt in culpa qui quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        {isMobileView && (
          <div className={cs("md:hidden", { hidden: !isMovedToLeft })}></div>
        )}
      </div>
      <div
        className={cs("relative z-0 hidden md:block", {
          "opacity-0 duration-300": !isMovedToLeft,
          "duration-[800ms]": isMovedToLeft,
        })}
      >
        <div className="fixed top-0 md:w-2/3 h-full overflow-scroll grid grid-cols-3 pl-32 gap-4 gap-y-12">
          {stories.map((story) => (
            <BlogCard
              key={story.uuid}
              imgSrc={`https:${story.content.image}`}
              title={story.content.title}
              blogPostId={story.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};
