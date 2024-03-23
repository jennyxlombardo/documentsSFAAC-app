
import Image from "next/image"

export default function NavBar() {
    return (
      <div className="relative z-20 md:bg-white/65 top-0 flex flex-col p-8 md:p-0 md:flex-row md:justify-around justify-between items-center h-36 text-xl sticky w-screen pb-2">
        <button className="py-1 hidden md:block">Home</button>
        <button className="py-1 hidden md:block">Services</button>
        <Image
          src="/logo1.png"
          alt="logo"
          width="200"
          height="200"
          className=""
        ></Image>
        <button className="py-2">About</button>
        <button className="py-1">Contact</button>
        <button className="py-1 md:hidden block">Home</button>
        <button className="py-2 md:hidden block">Services</button>
      </div>
    );
}