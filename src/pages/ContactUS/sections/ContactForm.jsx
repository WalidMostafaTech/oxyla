import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { sendContactUs } from "../../../services/homeServices";
import * as yup from "yup";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";
import MainInput from "../../../components/form/MainInput";
import SuccessModal from "../../../components/modals/SuccessModal";
import { useState } from "react";
import { LiaFaxSolid } from "react-icons/lia";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [successModal, setSuccessModal] = useState(false);

  const { setting } = useSelector((state) => state.setting);

  const contactSchema = yup.object().shape({
    inquiry_type: yup.string().required("Please select inquiry type"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message details are required"),
    file_path: yup.mixed().nullable().required("File is required"),
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  // 🧩 إعداد الـ mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: (formData) => sendContactUs(formData),
    onSuccess: () => {
      setSuccessModal(true);
      reset();
    },
  });

  // 🧩 الدالة اللي بتتبعت عند الإرسال
  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "file_path" && value?.[0]) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });
    mutate(formData);
  };

  const contactUsList = [
    { label: "Phone", value: setting?.phone, icon: <TbPhoneCall /> },
    {
      label: "Email",
      value: setting?.site_email,
      icon: <HiOutlineMailOpen />,
    },
    { label: "Fax", value: setting?.fax, icon: <LiaFaxSolid /> },
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <MainInput
          id="inquiry_type"
          label="Inquiry Type"
          type="select"
          options={[
            { value: "", label: "Select inquiry" },
            { value: "general", label: "General" },
            { value: "support", label: "Support" },
            { value: "complaint", label: "Complaint" },
            { value: "suggestion", label: "Suggestion" },
            { value: "partnership", label: "Partnership" },
          ]}
          register={register("inquiry_type")}
          error={errors.inquiry_type?.message}
        />

        <MainInput
          id="subject"
          label="Subject"
          placeholder="Problem with my booking"
          register={register("subject")}
          error={errors.subject?.message}
        />

        <MainInput
          id="message"
          label="Message Details"
          type="textarea"
          placeholder="Write your message or describe your issue here..."
          register={register("message")}
          error={errors.message?.message}
        />

        <MainInput
          id="file_path"
          label="Attach File (Optional)"
          type="file"
          register={register("file_path")}
          error={errors.file_path?.message}
        />

        <MainInput
          id="name"
          label="Name"
          placeholder="Enter your name..."
          register={register("name")}
          error={errors.name?.message}
        />

        <MainInput
          id="email"
          label="Email"
          placeholder="Enter your email..."
          register={register("email")}
          error={errors.email?.message}
        />

        <MainInput
          id="phone"
          label="Phone"
          type="number"
          placeholder="Enter your phone..."
          register={register("phone")}
          error={errors.phone?.message}
        />

        <FormBtn title={"Send"} loading={isPending} />
        <FormError errorMsg={error?.response?.data?.message} />
      </form>

      <div className="flex flex-wrap justify-between gap-4">
        {contactUsList.map(
          (item, index) =>
            item.value && (
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
            )
        )}
      </div>

      <SuccessModal
        openModal={successModal}
        onClose={() => setSuccessModal(false)}
        msg="Message sent successfully"
        onConfirm={() => setSuccessModal(false)}
        btnText="OK"
      />
    </section>
  );
};

export default ContactForm;
