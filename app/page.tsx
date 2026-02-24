"use client"
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:block">
        <nav className="flex items-center h-15 justify-between w-full gap-5 px-5 bg-white/20 shadow-lg">
          <div className="flex gap-5 items-center">
            <strong className="text-lg">Trello</strong>
            <p>Workspaces</p>
            <p>Recent</p>
            <p>Starred</p>
            <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition">
              Create
            </button>
          </div>
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
        <div>
          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed right-0 p-4 focus:outline-none">
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
          {/* Overlay oscuro */}
          {isOpen && (
            <div
              className="fixed inset-0"
              onClick={() => setIsOpen(false)}
            />
          )}
          {/* Menú lateral */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white/20 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {" "}
            <div className="p-6">
              {" "}
              <h2 className="text-xl font-bold mb-4">Menú</h2>{" "}
              <ul className="space-y-3">
                {" "}
                <li>
                  {" "}
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    {" "}
                    Inicio{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    {" "}
                    Servicios{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    {" "}
                    Nosotros{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-blue-500">
                    {" "}
                    Contacto{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
