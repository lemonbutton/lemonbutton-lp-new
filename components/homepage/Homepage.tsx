import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/mainImage1.png";
import img2 from "../../public/lemon-hero.png";

export const Homepage: React.FC = () => {
  const { t } = useTranslation("homepage");
  return (
    <div className="flex gap-12 md:gap-0 flex-col md:flex-row h-full w-full font-JetBrainsMono items-end relative px-10 md:px-24 pb-12 md:pb-24 md:justify-between">
      <div className="h-[300px] md:h-3/5 w-full absolute top-6 md:top-10 right-0 left-0 m-auto wow fadeInUp -z-10 pointer-events-none">
        <Image
          priority
          src={img1}
          alt="lemonbutton back logo"
          layout="fill"
          objectFit="contain"
        />
        <div className="h-[250px] md:h-[70%] w-full absolute top-0 bottom-0 right-0 left-0 translate-y-12 md:translate-y-8 m-auto -z-10 pointer-events-none transition-all">
          <Image
            className="wow fadeInUp"
            data-wow-delay="0.5s"
            priority
            src={img2}
            alt="lemonbutton back logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="pt-72 flex flex-col gap-8">
        <div>
          <p className="uppercase font-medium text-[26px] md:text-5xl md:leading-[63px] wow fadeInUp">
            {t("homepage_header_1")}
          </p>
          <p className="uppercase font-medium text-[26px] md:text-5xl md:leading-[63px] wow fadeInUp">
            {t("homepage_header_2")}
          </p>
        </div>
        <hr className="border-gray-400 max-w-[8rem] wow fadeInUp" />
        <p className="md:max-w-[26rem] wow fadeInUp">{t("homepage_text")}</p>
      </div>
      <ul className="wow fadeInUp">
        <li className="pb-4 text-end">
          <Link href="/contact">
            <button className="uppercase font-bold hover:text-lemon duration-300">
              {t("homepage_button_contact")} &#8226;
            </button>
          </Link>
        </li>
        <li className="text-end">
          <Link href="/features">
            <button className="uppercase font-bold hover:text-lemon duration-300">
              {t("homepage_button_projects")} &#8226;
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
