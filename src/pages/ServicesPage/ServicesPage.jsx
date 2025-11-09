import Filters from "./sections/Filters";
import ServicesList from "./sections/ServicesList";

const ServicesPage = () => {
  return (
    <article className="container pagePadding space-y-4 lg:space-y-8">
      <Filters />
      <ServicesList />
    </article>
  );
};

export default ServicesPage;
