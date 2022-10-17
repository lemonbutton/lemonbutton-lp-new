interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div>
      <p className="uppercase font-medium font-JetBrainsMono text-3xl pb-3 text-zinc-700">
        {text}
      </p>
      <hr className="bg-gray-600 h-0.5" />
    </div>
  );
};
