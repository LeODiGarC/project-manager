"use client";

import { MouseEventHandler, useRef } from "react";

interface Props {
  name: String;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: String;
}

const Workspace: React.FC<Props> = ({ name, active, onClick, color }) => {
  const accordionRef = useRef<HTMLUListElement>(null);

  const alias = name
    ?.split(" ")
    .filter((n) => n != "")
    .slice(0, 2)
    .map((n) => {
      return n.charAt(0);
    });

  return (
    <div className="flex flex-col justify-between gap-2 text-gray-600">
      <button
        onClick={onClick}
        className="flex items-center justify-between text-xl cursor-pointer transition-all hover:text-black">
        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center w-9 h-9 rounded-3xl ${color} text-white`}>
            <p>{alias}</p>
          </div>
          <strong className="break-all flex-1">{name}</strong>
        </div>
        <div
          className={`${active ? "rotate-180" : ""} transition-transform`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-up-icon lucide-chevron-up">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </div>
      </button>
      <div
        className="ml-5 transform transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          height: active ? accordionRef.current?.offsetHeight || 0 : 0,
        }}>
        <ul
          ref={accordionRef}
          className="flex flex-col gap-3 list-none text-gray-500">
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
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
                className="lucide lucide-square-kanban-icon lucide-square-kanban">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 7v7" />
                <path d="M12 7v4" />
                <path d="M16 7v9" />
              </svg>
              <p>Tableros</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
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
                className="lucide lucide-star-icon lucide-star">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <p>Destacados</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
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
                className="lucide lucide-users-icon lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              <p>Miembros</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
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
                className="lucide lucide-bolt-icon lucide-bolt">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <p>Configuración</p>
            </button>
          </li>
        </ul>
      </div>
      <hr className="text-gray-300" />
    </div>
  );
};

export default Workspace;
