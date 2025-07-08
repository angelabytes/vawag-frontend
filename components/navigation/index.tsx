import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const links = [
  { name: "Resources", href: "/resources" },
  { name: "Support", href: "/support" },
  { name: "Education", href: "/education" },
];

export default function Menu() {
  return (
    <nav
      className="bg-[linear-gradient(45deg,var(--sage-green),var(--deep-sage))]
                  fixed top-0 left-0 right-0 w-full z-50 shadow-md"
    >
      <div
        className="container mx-auto px-4 py-3
                   grid grid-cols-4 gap-4 items-center"
      >
        {/* Column 1: Brand/Logo - Left Side */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/plumeria_icon_1.png"
            className="h-8 sm:h-10"
            alt="Hiwahiwa Logo"
          />
          <span
            className="self-center whitespace-nowrap text-2xl font-semibold
                        text-white font-courgette"
          >
            H<span className="font-libre-baskerville">i</span>w
            <span className="font-libre-baskerville">a</span>H
            <span className="font-libre-baskerville">i</span>w
            <span className="font-libre-baskerville">a</span>
          </span>
        </Link>

        {/* Column 2 & 3: Navigation Links - Centered */}
        <div className="col-span-2 flex justify-center" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-4 rtl:space-x-reverse">
            {/* Navigation Links */}
            {links.map((link, index) => (
              <li key={index} className=" text-gray-100">
                <Link
                  to={link.href}
                  className="block px-0 text-white 
                             hover:bg-[var(--sage-green)] px-2 hover:rounded-full
                             transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Search Bar - Right Side */}
        <div className="flex items-center justify-end">
          {/* Desktop Search Bar (now always visible) */}
          <div className="relative">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3
                         pointer-events-none"
            >
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-white border border-gray-300 rounded-lg
                         bg-gray-50 focus:ring-[var(--lavendar)] focus:border-[var(--lavendar)]
                        "
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
