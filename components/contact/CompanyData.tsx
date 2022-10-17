import { Header } from "./Header";

export const CompanyData: React.FC = () => {
  return (
    <div className="flex flex-col font-JetBrainsMono font-light gap-5 leading-5 wow fadeInRight">
      <Header text="Dane firmy" />
      <p className="text-zinc-70 pt-3">LEMONBUTTON Sp. z o.o.</p>
      <p>
        <span className="font-semibold">NIP:</span> 6772465156
      </p>
      <div>
        <p className="font-semibold">Adres:</p>
        <p>Miechowska 5B/1</p>
        <p>30-055 Kraków, Polska</p>
      </div>
    </div>
  );
};
