interface HeaderProps {
  text: string;
  id?: string;
}

export const Header: React.FC<HeaderProps> = ({ text, id }) => {
  return (
    <div id={id}>
      <p className="uppercase font-medium font-JetBrainsMono text-3xl pb-3 text-zinc-800">
        {text}
      </p>
      <hr className="border-gray-900 border-b-0" />
    </div>
  );
};
