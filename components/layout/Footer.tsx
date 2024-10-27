import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";

const Footer = () => {
  const links = [
    {
      name: "About",
      href: "/#about-us",
    },
    {
      name: "Gallary",
      href: "/#gallary",
    },

    {
      name: "Contact",
      href: "/#contact-us",
    },
    {
      name: "Sponsorship",
      href: "/#sponsorship",
    },
  ];
  return (
    <footer id="footer" className="border-t">
      <Container className="flex flex-col justify-center items-center gap-5 pt-20">
        <div className="w-fit flex flex-wrap justify-center gap-5">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="w-fit text-xs sm:text-sm lg:text-base text-center block hover:text-sky-950 transition-all hover:scale-110"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 text-2xl">
          <FaFacebook className="hover:text-pink-500 transition-all hover:scale-110" />
          <FaInstagram className="hover:text-pink-500 transition-all hover:scale-110" />
          <FaXTwitter className="hover:text-pink-500 transition-all hover:scale-110" />
          <FaLinkedin className="hover:text-pink-500 transition-all hover:scale-110" />
          <FaGithub className="hover:text-pink-500 transition-all hover:scale-110" />
          <FaYoutube className="hover:text-pink-500 transition-all hover:scale-110" />
        </div>
        <h1 className="text-center text-xs font-thin pt-5">
          &copy; Copyright {new Date().getFullYear()} Bright Hope Orphanage
          Lumino. All Rights Reserved.
        </h1>
        <h1 className="text-center font-thin pb-5">
          Designed, Developed and Maintained by{" "}
          <Link
            href={"https://www.dolinesystems.com"}
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            Doline Systems
          </Link>{" "}
          on behalf of Bright Hope Orphanage Lumino.
        </h1>
      </Container>
    </footer>
  );
};

export default Footer;
