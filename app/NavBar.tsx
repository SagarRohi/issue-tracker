"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";
const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { link: "/", label: "dashboard" },
    { link: "/issues", label: "issues" },
  ];
  return (
    <nav className="flex space-x-6 h-14 items-center border-b mb-5 px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            className={classNames({
              "text-slate-900": link.link === currentPath,
              "text-slate-500": link.link !== currentPath,
              "hover:text-slate-800": true,
            })}
          >
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
