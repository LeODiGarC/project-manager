"use client"

import { useState } from "react";
import workspace from "@/mocks/workspace.json";
import Table from "./Table";


interface Member { usuario: string; email: string; color: string }
interface Etiqueta { nombre: string; color: string }
interface Card { desc?: string; etiquetas?: Etiqueta[]; miembros?: Member[] }
interface Lista { nombre: string; cards: Card[] }
interface Tablero { nombre: string; color: string; starred: boolean; listas: Lista[] }
interface Workspace { nombre: string; color: string; tableros: Tablero[] }


const Main = () => {
  // keep a mutable copy of the JSON so we can toggle starred
  const [espacios, setEspacios] = useState<Workspace[]>(
    (workspace?.workspace as Workspace[]) || [],
  );

  const toggleTablero = (workspaceIndex: number, tableroIndex: number) => {
    setEspacios((prev) => {
      const copy = [...prev];
      const tablero = { ...copy[workspaceIndex].tableros[tableroIndex] };
      tablero.starred = !tablero.starred;
      copy[workspaceIndex] = {
        ...copy[workspaceIndex],
        tableros: [...copy[workspaceIndex].tableros],
      };
      copy[workspaceIndex].tableros[tableroIndex] = tablero;
      return copy;
    });
  };
  
  return (
    <div className="p-5 lg:ml-[20%] min-h-[calc(100vh-60px)]">
      {espacios ? (
        <div className="flex flex-col gap-10 p-5 text-black">
          <div className="flex flex-col gap-5">
            <strong className="text-2xl">Destacados</strong>
            <div className="flex gap-5">
              <div className="w-100 h-30 bg-gray-600"></div>
              <div className="w-100 h-30 bg-gray-600"></div>
              <div className="w-100 h-30 bg-gray-600"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <strong className="text-2xl">Visto recientemente</strong>
            <div className="flex gap-5">
              <div className="w-100 h-30 bg-gray-600"></div>
              <div className="w-100 h-30 bg-gray-600"></div>
              <div className="w-100 h-30 bg-gray-600"></div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-5">
              <strong className="text-2xl">Espacios de trabajo</strong>
              {espacios.map((w, i) => {
                return (
                  <div key={i}>
                    <strong className="text-xl">{w.nombre}</strong>
                    <div className="flex gap-5">
                      {w.tableros.map((t, j) => {
                        return (
                          <Table
                          key={j}
                            color={t.color}
                            nombre={t.nombre}
                            starred={t.starred}
                            onToggle={() => toggleTablero(i, j)}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5 m-auto">
          <strong className="text-gray-600 text-3xl">
            No hay espacios de trabajo
          </strong>
          <strong className="text-gray-400 underline">
            + Crear nuevo espacio de trabajo
          </strong>
        </div>
      )}
    </div>
  );
};

export default Main;
