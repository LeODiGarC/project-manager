"use client"

import Workspace from "@/components/Inicio/Workspace";
import workspace from "@/mocks/workspace.json";
import { useState } from "react";
import { Plus } from "lucide-react";

const WorkspaceContainer = () => {
  const espacios = workspace?.workspace;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);}

    return (
      <div className="flex flex-col gap-5">
        <button className="flex items-center justify-between text-gray-400 cursor-pointer transition-colors hover:text-gray-600">
          <p className="text-xs">Espacios de trabajo</p>
          <Plus />
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
