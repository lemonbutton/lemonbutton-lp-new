import { Header } from "../contact/Header";

interface FeatureTextSectionProps {
  header: string;
  text: string;
  id: string;
}

export const FeatureTextSection: React.FC<FeatureTextSectionProps> = ({
  header,
  text,
  id,
}) => {
  return (
    <div className="font-JetBrainsMono" id={id}>
      <Header text={header} />
      <p className="pt-8 text-base">{text}</p>
    </div>
  );
};
