"use client";

import { Bell, Info, Kanban, Menu, User } from "lucide-react";
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
        <Link href="/" className="flex items-center gap-1">
        <Kanban />
          <strong className="text-2xl italic m-auto">MakeIt</strong>
        </Link>

        <div className="flex gap-5 items-center">
          <input
            type="text"
            name="SearchInput"
            placeholder="Search"
            className="bg-white/20 shadow-lg rounded p-2 focus:bg-white/15 focus:outline-none transition placeholder:text-white"
          />
          <button className="cursor-pointer">
            <Info size={20} />
          </button>
          <button className="cursor-pointer">
            <Bell size={20} />
          </button>
          <button className="bg-yellow-300 shadow-lg border-none rounded-full py-2 px-2 cursor-pointer">
            <User size={20} stroke="black" />
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
        className={`z-50 fixed flex top-0 items-center h-15 justify-center w-full gap-5 px-5 ${getBgColor} shadow-lg backdrop-blur-sm`}>
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-0 p-2.5 focus:outline-none">
          <Menu size={35}/>
        </button>
        <Link href="/" className="flex items-center gap-1">
        <Kanban />
          <strong className="text-2xl italic m-auto">MakeIt</strong>
        </Link>
        {/* Overlay oscuro */}
      </div>
      {isOpen && (
        <div className="z-50 fixed inset-0" onClick={() => setIsOpen(false)} />
      )}
      {/* Menú lateral */}
      <div
        className={`z-50 fixed top-15 left-0 h-full w-64 bg-white shadow-lg backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
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
