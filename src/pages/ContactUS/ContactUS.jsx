import ContactForm from "./sections/ContactForm";
import ContactMap from "./sections/ContactMap";

const ContactUS = () => {
  return (
    <article className="container pagePadding grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <ContactForm />
      <ContactMap />
    </article>
  );
};

export default ContactUS;
