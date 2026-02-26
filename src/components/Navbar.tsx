"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="z-50 pb-15">
        <div className="hidden lg:block">
          <nav className="z-50 fixed top-0 flex items-center h-15 justify-between w-full gap-5 px-5 bg-white/20 shadow-lg backdrop-blur-sm">
            <div className="flex gap-5 items-center">
              <p>Workspaces</p>
              <p>Recent</p>
              <p>Starred</p>
              <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition">
                Create
              </button>
            </div>
            <strong className="text-2xl">Trello</strong>
            <div className="flex gap-5 items-center">
              <input
                type="text"
                name="SearchInput"
                placeholder="Search"
                className="bg-white/20 shadow-lg rounded p-2 focus:bg-white/15 focus:outline-none transition"
              />
              <p>Info</p>
              <p>Notifications</p>
              <p>Profile</p>
            </div>
          </nav>
        </div>
        <div className="lg:hidden">
          <div className="fixed flex top-0 items-center h-15 justify-center w-full gap-5 px-5 bg-white/20 shadow-lg backdrop-blur-sm">
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
            <strong className="p-4 text-2xl">Trello</strong>
            {/* Overlay oscuro */}
          </div>
          {isOpen && (
            <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
          )}
          {/* Menú lateral */}
          <div
            className={`fixed top-15 left-0 h-full w-64 bg-white/20 shadow-lg backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Menú</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
