import useTranslation from "next-translate/useTranslation";
import { FeatureHCTextSection } from "./FeatureHCTextSection";

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.";

export const FeatureHCText: React.FC = () => {
    const { t } = useTranslation("features");
  return (
    <div className="w-full h-full z-0 text-2xl overflow-scroll md:pl-60 md:pr-36 pt-16 md:pt-12 font-JetBrainsMono flex flex-col gap-20">
      <FeatureHCTextSection
        id="subpage1"
        header={t("hc_subpage_title_one")}
        text={t("hc_subpage_title_one_text")}
      />
      <FeatureHCTextSection
        id="subpage2"
        header={t("hc_subpage_title_two")}
        text={t("hc_subpage_title_two_text")}
      />
      <FeatureHCTextSection
        id="subpage3"
        header={t("hc_subpage_title_three")}
        text={t("hc_subpage_title_three_text")}
      />
      <FeatureHCTextSection
        id="subpage4"
        header={t("hc_subpage_title_four")}
        text={t("hc_subpage_title_four_text")}
      />
    </div>
  );
};
