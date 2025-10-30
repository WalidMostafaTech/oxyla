import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const footerLinks = [
    {
      title: "Our Company",
      links: [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about" },
        { name: "Products", url: "/products" },
        { name: "Contact us", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Product Listings", url: "/product-listings" },
        { name: "Direct Supplier Connection", url: "/supplier-connection" },
        { name: "Business Opportunities", url: "/business-opportunities" },
        { name: "Logistics", url: "/logistics" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "User-Friendly Platform", url: "/platform" },
        { name: "Verified Suppliers", url: "/verified-suppliers" },
        { name: "Wide Product Range", url: "/product-range" },
        { name: "Fast & Secure Shipping", url: "/shipping" },
        { name: "Real-Time Updates", url: "/updates" },
      ],
    },
  ];

  const FooterComponent = ({ title, links }) => (
    <div>
      <h3 className="text-xl lg:text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url} className="hover:text-myBlue transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-white">
      <div className="container sectionPadding grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              target="_blank"
              className="text-3xl hover:text-myBlue duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-4xl hover:text-myBlue duration-300"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-3xl hover:text-myBlue duration-300"
            >
              <BsTwitterX />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-3xl hover:text-myBlue duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <FooterComponent
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-300">
        <div className="text-center">
          <p>All rights reserved to @Techno Masr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
