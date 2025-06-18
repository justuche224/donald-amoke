"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderOpen,
  BookOpen,
  Mail,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const NavbarComponent = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Projects", icon: FolderOpen, href: "/projects" },
    { name: "Blog", icon: BookOpen, href: "/blog" },
    { name: "Contact", icon: Mail, href: "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/#contact") {
      return pathname === "/#contact";
    }
    return pathname === href;
  };

  return (
    <>
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 transform hidden md:block">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 blur-lg animate-pulse"></div>

          <div className="relative rounded-full border border-white/10 bg-black/20 backdrop-blur-lg shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>

            <div className="relative px-6 py-3">
              <ul className="flex items-center gap-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-500 ease-out
                          ${
                            active
                              ? "text-white shadow-lg"
                              : "text-gray-300 hover:text-white"
                          }
                        `}
                      >
                        {active && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-90 shadow-lg shadow-purple-500/25"></div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-50 blur-sm"></div>
                          </>
                        )}

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="relative flex items-center gap-2">
                          <Icon
                            size={16}
                            className={`transition-all duration-300 ${
                              active
                                ? "text-white drop-shadow-sm"
                                : "text-gray-400 group-hover:text-white group-hover:scale-110"
                            }`}
                          />
                          <span
                            className={`transition-all duration-300 ${
                              active
                                ? "text-white font-semibold"
                                : "group-hover:text-white"
                            }`}
                          >
                            {item.name}
                          </span>

                          {active && (
                            <Sparkles
                              size={12}
                              className="text-white/80 animate-pulse ml-1"
                            />
                          )}
                        </div>

                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20"></div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-purple-500/10 to-transparent blur-sm opacity-50 rounded-full"></div>
        </div>
      </nav>

      <nav className="fixed left-0 right-0 top-3 z-50 mx-3 md:hidden">
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 blur-lg"></div>

          <div className="relative rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>

            <div className="relative px-4 py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <Home size={20} className="text-purple-400" />
                  <span>Donald</span>
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {isMobileMenuOpen && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <ul className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300
                              ${
                                active
                                  ? "text-white shadow-lg"
                                  : "text-gray-300 hover:text-white"
                              }
                            `}
                          >
                            {active && (
                              <>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-90 shadow-lg shadow-purple-500/25"></div>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-50 blur-sm"></div>
                              </>
                            )}

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="relative flex items-center gap-3 w-full">
                              <Icon
                                size={18}
                                className={`transition-all duration-300 ${
                                  active
                                    ? "text-white drop-shadow-sm"
                                    : "text-gray-400 group-hover:text-white"
                                }`}
                              />
                              <span
                                className={`transition-all duration-300 ${
                                  active
                                    ? "text-white font-semibold"
                                    : "group-hover:text-white"
                                }`}
                              >
                                {item.name}
                              </span>

                              {active && (
                                <Sparkles
                                  size={14}
                                  className="text-white/80 animate-pulse ml-auto"
                                />
                              )}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
