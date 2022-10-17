import { CompanyData } from "./CompanyData";
import { ContactData } from "./ContactData";
import { ContactForm } from "./ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex gap-24 px-20 py-8">
      <ContactForm />
      <div className="basis-2/5">
        <CompanyData />
        <ContactData />
      </div>
    </div>
  );
};
