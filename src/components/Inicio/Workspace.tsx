"use client";

import { Bolt, ChevronUp, SquareKanban, Star, Users } from "lucide-react";
import { type MouseEventHandler, useRef } from "react";

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
          className={`${active ? "" : "rotate-180"} transition-transform`}>
          <ChevronUp />
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
              <SquareKanban size={20} />
              <p>Tableros</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
              <Star size={20} />
              <p>Destacados</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
              <Users size={20} />
              <p>Miembros</p>
            </button>
          </li>
          <li>
            <button className="flex gap-1 items-center cursor-pointer transition-colors hover:text-gray-600">
              <Bolt size={20} />
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
