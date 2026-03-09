import Aside from "@/components/Inicio/Aside";
import Main from "@/components/Inicio/Main";

// Types mirroring workspace.json


export default function Home() {



  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <Aside />
          <Main />
        </div>
      </div>
    </>
  );
}
