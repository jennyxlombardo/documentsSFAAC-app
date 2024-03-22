
import Image from "next/image"

export default function NavBar() {
    return (
      <div className="flex flex-row justify-around items-center h-36 text-xl sticky w-screen border-nBlue border-b">
        <button>Home</button>
        <button>Services</button>
        <Image  src="/logo1.png" alt="logo" width="200" height="200"
          className="">
         
        </Image>
        <button>About</button>
        <button>Contact</button>
      </div>
    );
}