import useTranslation from "next-translate/useTranslation";
import { FeaturePMTextSection } from "./FeaturePMTextSection";


export const FeaturePMText: React.FC = () => {
  const { t } = useTranslation("features");
  return (
    <div className="w-full h-full z-0 text-2xl overflow-scroll md:pl-60 md:pr-36 pt-16 md:pt-12 font-JetBrainsMono flex flex-col gap-20">
      <FeaturePMTextSection
        id="subpage1"
        header={t("pm_subpage_title_one")}
        text={t("pm_subpage_title_one_text")}
      />
      <FeaturePMTextSection
        id="subpage2"
        header={t("pm_subpage_title_two")}
        text={t("pm_subpage_title_two_text")}
      />
      <FeaturePMTextSection
        id="subpage3"
        header={t("pm_subpage_title_three")}
        text={t("pm_subpage_title_three_text")}
      />
      <FeaturePMTextSection
        id="subpage4"
        header={t("pm_subpage_title_four")}
        text={t("pm_subpage_title_four_text")}
      />
    </div>
  )
};
