"use client"

import Workspace from "@/components/Inicio/Workspace";
import workspace from "../../mocks/workspace.json";
import { useState } from "react";

const WorkspaceContainer = () => {
  const espacios = workspace?.workspace;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);}

    return (
      <div className="flex flex-col gap-5">
        <button className="flex items-center justify-between text-gray-400 cursor-pointer transition-colors hover:text-gray-600">
          <p className="text-xs">Espacios de trabajo</p>
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
            className="lucide lucide-plus-icon lucide-plus">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        {espacios &&
          espacios.map((w, i) => {
            return (
              <div key={i}>
                <Workspace
                  name={w.nombre}
                  active={i === activeIndex}
                  onClick={() => handleClick(i)}
                  color={w.color}
                />
              </div>
            );
          })}
      </div>
    );
  };

export default WorkspaceContainer;
