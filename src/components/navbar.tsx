"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const pathname = usePathname();
  const menuItems = ["Home", "Projects", "Blog"];

  const isActive = (path: string) => {
    if (path === "Home") {
      return pathname === "/";
    }
    return pathname === `/${path.toLowerCase()}`;
  };

  return (
    <nav className="fixed left-0 top-0 z-10 w-full border-b border-gray-800/50 bg-black/5 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-center">
          <ul className="flex items-center gap-1 sm:gap-4">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300
                    ${
                      isActive(item)
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200"
                    }
                    ${
                      isActive(item)
                        ? "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:content-['']"
                        : ""
                    }
                  `}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300
                  ${
                    pathname === "/#contact"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
