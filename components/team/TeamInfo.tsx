import useTranslation from "next-translate/useTranslation";

export const TeamInfo: React.FC = () => {
  const { t } = useTranslation("team");
  return (
    <div className="font-JetBrainsMono basis-1/5 mx-12 md:pl-16 flex flex-col justify-center h-full pt-6 md:pt-0 wow fadeInRight">
      <p className="uppercase font-medium text-5xl pb-6">{t("team")}</p>
      <p className="leading-5 text-sm">{t("a_team")}</p>
    </div>
  );
};
