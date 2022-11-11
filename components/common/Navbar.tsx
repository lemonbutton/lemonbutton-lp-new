import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import logo from "../../public/logo.svg";
import cs from "classnames";
import { PositionContext } from "./Layout";
import useTranslation from "next-translate/useTranslation";

export const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { resetContainer } = useContext(PositionContext);

  const links = [
    {
      name: t("navbar_homepage"),
      link: "/",
    },
    {
      name: t("navbar_features"),
      link: "/features",
    },
    {
      name: t("case_studies"),
      link: "/case-studies",
    },
    {
      name: t("navbar_team"),
      link: "/team",
    },
    {
      name: t("navbar_blog"),
      link: "/blog",
    },
    {
      name: t("navbar_contact"),
      link: "/contact",
    },
  ];

  return (
    <div className="py-4 pt-6 md:py-8 px-9 flex justify-between items-center md:pb-4 md:pt-5 md:px-16 z-50 w-full fixed bg-white md:static md:bg-none">
      <div className="mr-8 cursor-pointer w-[180px] sm:w-auto">
        <Link href="/">
          <button onClick={() => resetContainer()}>
            <Image src={logo} alt="logo" />
          </button>
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <ul className="hidden gap-8 lg:flex lg:flex-row lg:justify-end">
          {links.map((link, idx) => (
            <button
              onClick={() => resetContainer()}
              key={link.name + idx}
              className="leading-5 uppercase font-JetBrainsMono font-bold"
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
            <div className="mx-4 cursor-pointer flex justify-end items-end flex-col text-center bg-[#f5f2f2] p-8 absolute top-5 -right-4 mt-4 min-w-[180px] rounded-md shadow-md gap-3">
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
