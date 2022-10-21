import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import logo from "../../public/logo.svg";
import cs from "classnames";
import { PositionContext } from "./Layout";

const links = [
  {
    name: "Strona główna",
    link: "/",
  },
  {
    name: "Usługi",
    link: "/features",
  },
  {
    name: "Zespół",
    link: "/team",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Kontakt",
    link: "/contact",
  },
];

export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  const { resetContainer } = useContext(PositionContext);

  return (
    <div className="py-4 pt-6 md:py-8 px-9 flex justify-between items-center md:pb-4 md:pt-5 md:px-16 z-50 w-full fixed bg-white md:static md:bg-none">
      <div className="mr-8 cursor-pointer w-[180px] sm:w-auto">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <ul className="hidden gap-6 lg:flex lg:flex-row lg:justify-end">
          {links.map((link, idx) => (
            <button
              onClick={() => resetContainer()}
              key={link.name + idx}
              className="leading-5 uppercase font-JetBrainsMono"
            >
              <Link href={link.link}>
                <li
                  className={cs("cursor-pointer", {
                    "text-lemon": link.link === router.pathname,
                  })}
                >
                  {link.name}
                </li>
              </Link>
            </button>
          ))}
        </ul>

        <div className="flex relative lg:hidden">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className={cs("tham tham-e-squeeze tham-w-6", {
              "tham-active": toggleMenu,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </button>
          {toggleMenu && (
            <div className="mx-4 cursor-pointer flex justify-end items-end flex-col text-center bg-[#f5f2f2] p-8 absolute top-5 -right-4 mt-4 max-w[140px] rounded-md shadow-md gap-2">
              {links.map((link, idx) => {
                if (link.link === "/") {
                  return;
                }
                return (
                  <Link
                    key={link.name + idx}
                    href={link.link}
                    className={cs({
                      "text-lemon": link.link === router.pathname,
                    })}
                  >
                    <button
                      onClick={() => resetContainer()}
                      className="font-bold leading-5 uppercase font-JetBrainsMono"
                    >
                      {link.name}
                    </button>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
