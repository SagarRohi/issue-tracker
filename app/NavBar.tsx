import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
const NavBar = () => {
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
          <li className="text-slate-500 hover:text-slate-800">
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
