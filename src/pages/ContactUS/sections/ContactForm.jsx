import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";
import MainInput from "../../../components/form/MainInput";
import { LiaFaxSolid } from "react-icons/lia";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactForm = () => {
  const contactUsList = [
    {
      label: "Phone",
      value: "+88 123 456 789",
      icon: <TbPhoneCall />,
    },
    {
      label: "Email",
      value: "example6@example.com",
      icon: <HiOutlineMailOpen />,
    },
    {
      label: "Fax",
      value: "03 123 45",
      icon: <LiaFaxSolid />,
    },
  ];
  return (
    <section className="space-y-6">
      <hgroup>
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">
          Get in <span className="text-myPurple">Touch</span>
        </h1>
        <p className="text-sm text-gray-500">
          We’d love to hear from you. Reach out with any questions or
          collaboration ideas.
        </p>
      </hgroup>

      <form className="space-y-4">
        <MainInput
          id={"inquiry_type"}
          label="Inquiry Type"
          type="select"
          options={[
            { value: "", label: "General" },
            { value: "1", label: "Job" },
          ]}
        />

        <MainInput
          id="subject"
          label="Subject"
          placeholder={"Problem with my booking"}
        />

        <MainInput
          id="message_details"
          label="Message Details"
          placeholder={"Write your message or describe your issue here..."}
        />

        <MainInput
          id="attach_file"
          label="Attach File (Optional)"
          type="file"
          placeholder={"Upload a screenshot or document"}
        />

        <MainInput
          id="email"
          label="Email"
          placeholder={"Enter your email..."}
        />

        <MainInput
          id="phone"
          label="Phone"
          type="number"
          placeholder={"Enter your phone..."}
        />

        <FormBtn title="Send" />
        <FormError errorMsg="" />
      </form>

      <div className="flex flex-wrap justify-between gap-4">
        {contactUsList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-myBlue-1 group text-sm"
          >
            <span className="text-3xl group-hover:scale-120 duration-300">
              {item.icon}
            </span>
            <div>
              <p className="font-bold">{item.label}</p>
              <p className="text-myPurple">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
