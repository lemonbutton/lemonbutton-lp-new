import { FeatureTextSection } from "./FeatureTextSection";

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.";

export const FeatureText: React.FC = () => {
  return (
    <div className="w-full h-full z-0 text-2xl overflow-scroll md:pl-60 md:pr-36 pt-16 md:pt-12 font-JetBrainsMono flex flex-col gap-20">
      <FeatureTextSection
        id="subpage1"
        header="Subpage numebr 1"
        text={exampleText}
      />
      <FeatureTextSection
        id="subpage2"
        header="Subpage numebr 2"
        text={exampleText}
      />
      <FeatureTextSection
        id="subpage3"
        header="Subpage numebr 3"
        text={exampleText}
      />
      <FeatureTextSection
        id="subpage4"
        header="Subpage numebr 4"
        text={exampleText}
      />
    </div>
  );
};
