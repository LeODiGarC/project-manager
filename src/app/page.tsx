import WorkspaceContainer from "@/components/WorkspaceContainer";
import workspace from "../mocks/workspace.json";

export default function Home() {
  const espacios = workspace?.workspace;
  return (
    <>
      <div className="bg-white">
        <div className="lg:grid grid-cols-10 divide-x divide-gray-200">
          <div className="hidden lg:flex flex-col col-span-2 p-5 min-h-[calc(100vh-60px)] gap-15">
            <button className="flex gap-1 text-gray-600 cursor-pointer transition-all hover:text-black">
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
                className="lucide lucide-square-kanban-icon lucide-square-kanban">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 7v7" />
                <path d="M12 7v4" />
                <path d="M16 7v9" />
              </svg>
              <strong>Tableros</strong>
            </button>
            <WorkspaceContainer />
          </div>
          <div className="p-5 lg:col-span-8 min-h-[calc(100vh-60px)]">
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
                  <div className="flex flex-col gap-2">
                    <strong className="text-2xl">Espacios de trabajo</strong>
                    {espacios.map((w, i) => {
                      return (
                        <strong key={i} className="text-xl">
                          {w.nombre}
                        </strong>
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
        </div>
      </div>
    </>
  );
}
