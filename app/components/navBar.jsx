
import Image from "next/image"

export default function NavBar() {
    return (
      <div className="flex flex-col p-10 md:p-0 md:flex-row md:justify-around justify-between items-center h-36 text-xl sticky w-screen md:border-nBlue md:border-b">
        <button className="p-2">Home</button>
        <button className="p-2">Services</button>
        <Image  src="/logo1.png" alt="logo" width="200" height="200"
          className="">
         
        </Image>
        <button className="p-2">About</button>
        <button className="p-2">Contact</button>
      </div>
    );
}