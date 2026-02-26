import Card from "../components/Card"

export default function Home() {
  return (
    <>
      <div className="p-5 grid auto-cols-max grid-flow-col justify-start justify-items-center gap-5">
        <div className="p-5 bg-gray-50 rounded">
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
        <div className="p-5 bg-gray-50 rounded">
          <h3 className="text-black font-semibold">Evaluation and learning</h3>
          <button className="text-gray-500 border-none hover:text-gray-400 transition cursor-pointer">
            + Add a card
          </button>
        </div>
      </div>
    </>
  );
}
