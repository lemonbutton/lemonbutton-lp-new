import Image from "next/image";
import arrowIcon from "../../public/arrow.svg";
import { FormInput } from "./FormInput";
import { Header } from "./Header";

const formElements = [
  {
    name: "name",
    label: "Imię i nazwisko",
    placeholder: "Twoje imię i nazwisko",
    type: "text",
  },
  {
    name: "company",
    label: "Firma",
    placeholder: "Twoja firma",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Twój email",
    type: "text",
  },
  {
    name: "phone",
    label: "Telefon",
    placeholder: "Twój telefon",
    type: "text",
  },
  {
    name: "message",
    label: "Wiadomość",
    placeholder: "Napisz wiadomość",
    type: "textarea",
  },
];

export const ContactForm: React.FC = () => {
  return (
    <form className="font-JetBrainsMono md:basis-3/5 flex flex-col gap-3 2xl:gap-5 wow fadeInRight pt-12 md:pt-0">
      <Header text="Formularz" />
      {formElements.map((element) => (
        <FormInput
          key={JSON.stringify(element)}
          name={element.name}
          label={element.label}
          placeholder={element.placeholder}
          type={element.type}
        />
      ))}
      <label className="text-[13px] flex flex-row-reverse justify-end items-start leading-4">
        Lorem ipsum dolor sit amet conbtesteutr doilloroes sit elit dolore sit
        et lorem magna valid rex rezuredot.
        <input
          placeholder="Napisz wiadomość"
          type="checkbox"
          className="border border-gray-300 mr-4 w-3 h-3 inline-block aspect-square checked:bg-lemon mt-1 appearance-none"
        />
      </label>
      <button
        className="bg-lemon font-bold uppercase py-2 px-3 w-full md:max-w-fit my-8 md:mt-1"
        type="submit"
      >
        <span className="mr-16 text-center">Wyślij wiadomość</span>
        <Image src={arrowIcon} alt="arrow icon" />
      </button>
    </form>
  );
};
