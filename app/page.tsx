import Image from "next/image";
import NavBar from "./components/navBar"
import Hero from "./components/hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between absolute object-contain">
      <NavBar />
      <Hero />
    </main>
  );
}
