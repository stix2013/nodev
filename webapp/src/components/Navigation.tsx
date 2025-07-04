import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-2 rounded-full">
      <ul className="list-none flex items-center gap-x-4 text-lg text-gray-400">
        <li className="px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300"
            href="/users"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
