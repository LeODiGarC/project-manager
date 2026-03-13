import { SquareKanban } from "lucide-react";
import WorkspaceContainer from "./WorkspaceContainer";

const Aside = () => {
  return (
    <div className="hidden lg:flex flex-col lg:fixed lg:top-0 lg:pt-20 lg:left-0 lg:h-[calc(100vh-60px)] lg:w-[20%] p-5 overflow-y-auto border-gray-200 gap-15">
      <button className="flex gap-1 text-gray-600 cursor-pointer transition-all hover:text-black">
        <SquareKanban />
        <strong>Tableros</strong>
      </button>
      <WorkspaceContainer />
    </div>
  );
};

export default Aside;
