import { Header } from "../contact/Header";

interface FeaturePMTextSectionProps {
  header: string;
  text: string;
  id: string;
}

export const FeaturePMTextSection: React.FC<FeaturePMTextSectionProps> = ({
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
