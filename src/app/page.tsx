import AuthForm from "../components/form/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="grid grid-cols-1 place-items-center h-full">
        <h2 className="">Bienvenidos al repositorio!</h2>
        <h1 className="text-4xl">Hola Mundo</h1>
        <AuthForm /> {}
      </main>
    </div>
  );
}