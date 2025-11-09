import { useParams } from "react-router-dom";
import DetailsSection from "./sections/DetailsSection";
import ImagesSlider from "./sections/ImagesSlider";
import img from "../../assets/images/book-img.jpg";
import ServiceTestimonials from "./sections/ServiceTestimonials";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceData = {
    id,
    title: "Fully equipped oxygen room for emergency treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit",
    address: "Riyadh, Saudi Arabia",
    images: [img, img, img, img],
    rate: 4.5,
    price: 100,
    status: "Unavailable Now",
    discount: 20,
    available_times: [
      { id: 1, value: "1", label: "10:00 AM" },
      { id: 2, value: "2", label: "11:00 AM" },
      { id: 3, value: "3", label: "12:00 PM" },
      { id: 4, value: "4", label: "1:00 PM" },
      { id: 5, value: "5", label: "2:00 PM" },
      { id: 6, value: "6", label: "3:00 PM" },
      { id: 7, value: "7", label: "4:00 PM" },
    ],
    Included_in_session: [
      { id: 1, image: img, label: "label" },
      { id: 2, image: img, label: "label" },
      { id: 3, image: img, label: "label" },
      { id: 4, image: img, label: "label" },
    ],
  };
  return (
    <article className="container pagePadding">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DetailsSection data={serviceData} />
        <ImagesSlider images={serviceData.images} />
      </div>

      <ServiceTestimonials />
    </article>
  );
};

export default ServiceDetails;
