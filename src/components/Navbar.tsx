"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DesktopNavbar = () => {
  const pathname = usePathname();
  const getBgColor = pathname === "/" ? "bg-blue-600" : "bg-white/20";
  return (
    <div className="hidden lg:block">
      <nav
        className={`z-50 fixed top-0 flex items-center h-15 justify-between w-full gap-5 px-5 ${getBgColor} shadow-lg backdrop-blur-sm`}>
        <div className="flex gap-5 items-center">
          <Link href="workspaces">Workspaces</Link>
          <p>Recent</p>
          <p>Starred</p>
          <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
            Create
          </button>
        </div>
        <Link href="/">
          <strong className="text-2xl italic m-auto">MakeIt</strong>
        </Link>

        <div className="flex gap-5 items-center">
          <input
            type="text"
            name="SearchInput"
            placeholder="Search"
            className="bg-white/20 shadow-lg rounded p-2 focus:bg-white/15 focus:outline-none transition"
          />
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-info-icon lucide-info">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </button>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bell-icon lucide-bell">
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </button>
          <button className="bg-yellow-300 shadow-lg border-none rounded-full py-2 px-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-icon lucide-user">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const getBgColor = pathname === "/" ? "bg-blue-600" : "bg-white/20";
  return (
    <div className="lg:hidden">
      <div
        className={`fixed flex top-0 items-center h-15 justify-center w-full gap-5 px-5 ${getBgColor} shadow-lg backdrop-blur-sm`}>
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-0 p-2.5 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <strong className="p-4 text-2xl m-auto italic">MakeIt</strong>
        {/* Overlay oscuro */}
      </div>
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
      {/* Menú lateral */}
      <div
        className={`fixed top-15 left-0 h-full w-64 bg-white shadow-lg backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Menú</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-blue-500">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="workspaces"
                className="block text-gray-700 hover:text-blue-500">
                Workspaces
              </Link>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-blue-500">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="z-50 pb-15">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
