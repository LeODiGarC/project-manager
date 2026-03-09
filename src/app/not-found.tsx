import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-5">
      <h1 className="text-8xl font-bold">404</h1>
      <div className="bg-white h-1 w-60"></div>
      <h1 className="text-2xl font-bold">Página no encontrada</h1>
      <p>El enlace que intentaste abrir no existe.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 transition-colors cursor-pointer text-white font-bold py-2 px-4 rounded">
        Volver a la página principal
      </Link>
    </div>
  );
}