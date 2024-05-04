import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="w-desktop mx-auto flex items-start gap-x-10">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
