import { Header } from "./Header";

export const ContactData: React.FC = () => {
  return (
    <div className="font-JetBrainsMono pt-12 md:pt-16 wow fadeInRight">
      <Header text="Dane kontaktowe" />
      <p className="pt-8 pb-5">
        <span className="font-semibold leading-5">TEL:</span> +48 000 000 000
      </p>
      <p>
        <span className="font-semibold leading-5">EMAIL:</span>{" "}
        hello@lemmonbutton.pl
      </p>
    </div>
  );
};
