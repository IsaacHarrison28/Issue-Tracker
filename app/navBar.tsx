"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Adjust the import path as needed
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

export default function NavBarComponent() {
  const currentLink = usePathname();
  console.log("Current Link:", currentLink);
  const Links = [
    { Label: "Dashboard", href: "/" },
    { Label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex items-center justify-between p-4 border-b border-zinc-200 bg-white shadow-md">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-4">
        {Links.map((link) => (
          <li
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentLink,
              "text-zinc-500": link.href !== currentLink,
              "hover:text-zinc-800 transition-colors duration-200": true,
            })}
          >
            <Link href={link.href}>{link.Label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
