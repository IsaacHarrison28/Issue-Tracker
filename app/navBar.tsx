import Link from "next/link";
import { FaBug } from "react-icons/fa";

export default async function NavBarComponent() {
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Link href={link.href}>{link.Label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
