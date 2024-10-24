import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-700 sticky top-0 left-0 z-50">
      <Container className="flex justify-between items-center py-1">
        <Image
          src={"/logo.JPG"}
          alt="bh-logo"
          height={100}
          width={100}
          className="h-[8vh] w-[8vh] rounded-full"
        />
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-center text-slate-100 items-center">
            <Link
              href={"#"}
              className="hover:bg-slate-100 hover:text-blue-700 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href={"#about-us"}
              className="hover:bg-slate-100 hover:text-blue-700 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              About us
            </Link>
            <Link
              href={"#gallary"}
              className="hover:bg-slate-100 hover:text-blue-700 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              Gallary
            </Link>
            <Link
              href={"#sponsorship"}
              className="hover:bg-slate-100 hover:text-blue-700 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              Sponsorship
            </Link>
            <Link
              href={"#contact-us"}
              className="hover:bg-slate-100 hover:text-blue-700 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              Contact us
            </Link>
          </div>
          <div className="w-fit flex">
            <Link
              href={"signin"}
              className="text-slate-100 hover:text-slate-200 font-thin block w-full px-3 py-2"
            >
              Signin
            </Link>
            <Link
              href={"/donate"}
              className="px-5 py-2 bg-slate-100 hover:bg-slate-200 transition-colors duration-300 font-bold text-blue-700 rounded-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
