import WorkspaceContainer from "./WorkspaceContainer";

const Aside = () => {
  return (
    <div className="hidden lg:flex flex-col lg:fixed lg:top-0 lg:pt-20 lg:left-0 lg:h-[calc(100vh-60px)] lg:w-[20%] p-5 overflow-y-auto border-gray-200 gap-15">
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
  );
};

export default Aside;
