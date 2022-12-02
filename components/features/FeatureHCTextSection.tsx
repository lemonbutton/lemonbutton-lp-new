import { Header } from "../contact/Header";

interface FeatureHCTextSectionProps {
  header: string;
  text: string;
  id: string;
}

export const FeatureHCTextSection: React.FC<FeatureHCTextSectionProps> = ({
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
