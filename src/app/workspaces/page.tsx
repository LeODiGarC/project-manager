import { ChevronDown, SquareKanban, Star, User } from "lucide-react";
import Card from "@/components/Card";

export default function Workspace() {
  return (
    <>
      <div className="flex items-center justify-between p-3 pb-0">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1 bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
            <SquareKanban size={20} />
            <p className="hidden lg:block m-auto">Tableros</p>
            <ChevronDown size={20} />
          </button>
          <strong className="text-2xl">Program Management</strong>
          <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
            <Star />
          </button>
          <div className="hidden lg:block h-10 w-1 mx-1 bg-gray-50 rounded"></div>
          <div className="hidden lg:block bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
            <p>Workspace 1</p>
          </div>
          <div className="hidden lg:block h-10 w-1 mx-1 bg-gray-50 rounded"></div>
          <div className="flex items-center gap-1">
            <div className="hidden lg:block p-2 rounded-3xl bg-white/20 shadow-lg">
              <User size={20} />
            </div>
            <button className="hidden lg:block bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
              <p>Invitar</p>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-1">
          <button className="lg:hidden bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
              <p>Invitar</p>
            </button>
          <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
            <p>Editar</p>
          </button>
        </div>
      </div>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-none lg:auto-cols-max lg:grid-flow-col justify-start items-start gap-5">
        <div className="p-3 bg-gray-50 rounded">
          <h3 className="text-black font-semibold">Planning</h3>
          <button className="text-gray-500 border-none hover:text-gray-400 transition cursor-pointer">
            + Add a card
          </button>
        </div>
        <div className=" flex flex-col items-start p-3 bg-gray-100 rounded shadow-lg gap-3">
          <h3 className="text-black font-semibold">Delivery</h3>
          <Card />
          <Card />
          <button className="text-gray-500 border-none hover:text-gray-400 transition cursor-pointer">
            + Add a card
          </button>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <h3 className="text-black font-semibold">Evaluation and learning</h3>
          <button className="text-gray-500 border-none hover:text-gray-400 transition cursor-pointer">
            + Add a card
          </button>
        </div>
        <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">
          + Add List
        </button>
      </div>
    </>
  );
}
