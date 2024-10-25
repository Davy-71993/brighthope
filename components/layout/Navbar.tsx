"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FlyIn from "../animations/FlyIn";
import Container from "./Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleOpenClose = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (menuRef.current) {
      window.addEventListener("click", (e) => {
        if (!menuRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      });
    }

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);
  return (
    <div className="w-full bg-blue-700 sticky top-0 left-0 z-50">
      <Container className="flex justify-between relative items-center py-1 h-16 sm:h-20">
        <Image
          src={"/logo.JPG"}
          alt="bh-logo"
          height={100}
          width={100}
          className="h-14 sm:h-16 w-14 sm:w-16 rounded-full"
        />
        <div
          ref={menuRef}
          className="w-full h-full flex items-center justify-end"
        >
          <div className={open ? "block" : "hidden sm:flex"}>
            <FlyIn
              from={"right"}
              className="w-full max-w-96 flex h-[90vh] sm:h-fit absolute sm:relative right-0 top-16 sm:top-0 sm:max-w-full bg-blue-700 flex-col sm:flex-row justify-between items-center"
            >
              <div className="w-full flex flex-col sm:flex-row md:gap-5 p-5 justify-center text-slate-100 items-center text-sm">
                <Link
                  onClick={handleOpenClose}
                  href={"#"}
                  className="hover:bg-slate-100 w-full sm:w-fit hover:text-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  onClick={handleOpenClose}
                  href={"#about-us"}
                  className="hover:bg-slate-100 w-full sm:w-fit hover:text-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  onClick={handleOpenClose}
                  href={"#gallary"}
                  className="hover:bg-slate-100 w-full sm:w-fit hover:text-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
                >
                  Gallary
                </Link>
                <Link
                  onClick={handleOpenClose}
                  href={"#sponsorship"}
                  className="hover:bg-slate-100 w-full sm:w-fit hover:text-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
                >
                  Sponsorship
                </Link>
                <Link
                  onClick={handleOpenClose}
                  href={"#contact-us"}
                  className="hover:bg-slate-100 w-full sm:w-fit hover:text-blue-700 px-3 py-1 rounded-lg transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
              <div className="px-5 sm:px-0 pt-10 sm:pt-0 pb-5 sm:pb-0 w-full">
                <Link
                  href={"/donate"}
                  onClick={handleOpenClose}
                  className="px-2 sm:px-3 sm:text-sm md:text-base md:px-5 py-2 flex w-full bg-slate-100 h-fit hover:bg-slate-200 transition-colors duration-300 font-bold text-blue-700 rounded-lg"
                >
                  Get in touch
                </Link>
              </div>
            </FlyIn>
          </div>
          <button
            className="w-8 flex sm:hidden flex-col gap-1"
            onClick={handleOpenClose}
          >
            <span
              className={`h-1 w-full bg-slate-100 rounded-md transition-all duration-500 ${
                open ? "rotate-45 translate-y-2 bg-destructive" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-slate-100 rounded-md transition-all duration-500 ${
                open ? "opacity-0 -translate-x-6" : "opacity-1 -translate-x-0"
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-slate-100 rounded-md transition-all duration-500 ${
                open ? "-rotate-45 -translate-y-2 bg-destructive" : ""
              }`}
            ></span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
