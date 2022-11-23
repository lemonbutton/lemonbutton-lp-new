import { TeamMembers } from "./TeamMembers";

interface ActiveTeamMemberTextProps {
  member: TeamMembers;
}

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, auctor ac purus sit amet, facilisis eleifend sem. Pellentesque rhoncus enim nisl, eu ullamcorper tortor laoreet eget. Etiam quis vehicula lacus. Proin ultricies lacus sit amet mattis rutrum. Morbi a consectetur turpis. Nulla ac vestibulum mauris. Nunc fringilla vel sem eget porttitor. Aenean scelerisque ac nisl id ultrices. Integer quis scelerisque odio, id ultricies lectus. Curabitur iaculis augue metus, viverra lacinia ipsum lobortis ac. Mauris congue est eu commodo interdum. Sed eget diam nec dui maximus ullamcorper. Duis lobortis volutpat imperdiet. Fusce nec tempus orci. Quisque nec turpis nibh. Nunc egestas velit luctus convallis suscipit.";

export const ActiveTeamMemberText: React.FC<ActiveTeamMemberTextProps> = ({
  member,
}) => {
  const renderText = () => {
    switch (member) {
      case TeamMembers.TEMP1:
        return exampleText;
      case TeamMembers.TEMP2:
        return exampleText;
      case TeamMembers.TEMP3:
        return exampleText;
      default:
        return exampleText;
    }
  };
  return (
    <div className="w-full h-full z-0 overflow-scroll md:pl-60 md:pr-36 pt-16 md:pt-32 font-JetBrainsMono">
      {renderText()}
    </div>
  );
};
