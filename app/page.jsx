'use client'

import Image from "next/image";
import NavBar from "./components/navBar"
import Hero from "./components/hero"
import MidPhrase from './components/midPhrase'
import Formula from "./components/trial"

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between  bg-white ">
      {/* <div>
        <NavBar />
        <Hero />
      </div>
      <br></br>
      <div className="z-20 h-40 mt-96">
        <MidPhrase />
      </div> */}
     <Formula />
     
    </main>
  );
}
