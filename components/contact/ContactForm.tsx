export const ContactForm: React.FC = () => {
  return (
    <form className="font-JetBrainsMono basis-1/2">
      <p className="uppercase font-medium text-3xl">Formularz</p>
      <hr className="bg-gray-600 h-0.5" />
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1">
        Imię i nazwisko
        <input
          placeholder="Twoje imię i nazwisko"
          className="border border-gray-300 ml-4 font-normal text-base p-1"
        />
      </label>
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1">
        Firma
        <input
          placeholder="Twoja firma"
          className="border border-gray-300 ml-4 font-normal text-base p-1"
        />
      </label>
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1">
        Email
        <input
          placeholder="Twój email"
          className="border border-gray-300 ml-4 font-normal text-base p-1"
        />
      </label>
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1">
        Telefon
        <input
          placeholder="Twój telefon"
          className="border border-gray-300 ml-4 font-normal text-base p-1"
        />
      </label>
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1">
        Wiadomość
        <input
          placeholder="Napisz wiadomość"
          className="border border-gray-300 ml-4 font-normal text-base p-1"
        />
      </label>
      <label className="text-[13px] flex flex-row-reverse justify-end items-start">
        Lorem ipsum dolor sit amet conbtesteutr doilloroes sit elit dolore sit
        et lorem magna valid rex rezuredot.
        <input
          placeholder="Napisz wiadomość"
          type="checkbox"
          className="border border-gray-300 mr-4 mt-1"
        />
      </label>
    </form>
  );
};
