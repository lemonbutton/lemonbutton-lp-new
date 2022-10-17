import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo.svg";

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

const Menu = () => (
  <>
    <p>
      <a href="#features">Usługi</a>{" "}
    </p>
    <p>
      <a href="#team">Zespół</a>{" "}
    </p>
    <p>
      <a href="#blog">Blog</a>{" "}
    </p>
    <p>
      <a href="#kontakt">Kontakt</a>{" "}
    </p>
  </>
);

export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="py-8 px-9 flex justify-between items-center pt-8 md:pb-4 md:pt-5 md:px-16">
      <div className="mr-8 cursor-pointer w-[180px] sm:w-auto">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex flex-1 justify-end items-center">
        <div className="hidden font-bold leading-5 uppercase gap-6 lg:flex lg:flex-row lg:justify-end font-JetBrainsMono">
          {links.map((link, idx) => (
            <Link key={link.name + idx} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex relative lg:hidden">
          {toggleMenu ? (
            <button onClick={() => setToggleMenu(false)}>O</button>
          ) : (
            <button onClick={() => setToggleMenu(true)}>X</button>
          )}
          {toggleMenu && (
            <div className="font-bold leading-5 uppercase mx-4 cursor-pointer flex justify-end items-end flex-col text-center bg-[#f5f2f2] p-8 absolute top-5 -right-4 mt-4 max-w[140px] rounded-md shadow-md gap-2 font-JetBrainsMono">
              {links.map((link, idx) => {
                if (link.link === "/") {
                  return;
                }
                return (
                  <Link key={link.name + idx} href={link.link}>
                    {link.name}
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
