import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <main className="grid grid-cols-1 place-items-center h-full">
        <h2 className="">Bienvenidos al repositorio!</h2>
        {
          <h1 className="text-4xl">Ho</h1> 
        }
        <h1 className="text-4xl"></h1> 
      </main>
    </div>
  );
}
