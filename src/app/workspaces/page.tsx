import Card from "../../components/Card"

export default function Workspace() {
  return (
    <>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-none lg:auto-cols-max lg:grid-flow-col justify-start items-start gap-5">
        <div className="p-3 bg-gray-50 rounded">
          <h3 className="text-black font-semibold">Planning</h3>
          <button className="text-gray-500 border-none hover:text-gray-400 transition cursor-pointer">
            + Add a card
          </button>
        </div>
        <div className=" flex flex-col items-start p-3 bg-gray-100 rounded shadow-lg gap-3">
          <h3 className="text-black font-semibold">Delivery</h3>
          <Card/>
          <Card/>
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
        <button className="bg-white/20 shadow-lg border-none rounded py-2 px-3 hover:bg-white/15 transition cursor-pointer">+ Add List</button>
      </div>
    </>
  );
}
