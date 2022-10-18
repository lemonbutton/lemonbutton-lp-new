import { CompanyData } from "./CompanyData";
import { ContactData } from "./ContactData";
import { ContactForm } from "./ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col-reverse px-8 md:flex-row md:gap-24 md:px-20 basis-full">
      <ContactForm />
      <div className="md:basis-2/5">
        <CompanyData />
        <ContactData />
      </div>
    </div>
  );
};
