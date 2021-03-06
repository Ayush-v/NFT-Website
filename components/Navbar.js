import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  useEffect(() => {
    if (open === true) {
      document.querySelector("body").style.position = "fixed";
    } else if (open === false) {
      document.querySelector("body").style.position = "initial";
    }
  }, [open]);

  return (
    <>
      <header className="font-nanum flex justify-between items-center py-8 px-6 relative max-w-screen-xl mx-auto">
        <h1 className="text-5xl cursor-pointer">Logo</h1>
        <button
          className="absolute top-9 right-6 z-50 md:hidden"
          onClick={() => isOpen(!open)}
        >
          <i
            className={
              open ? "ri-close-line text-3xl" : "ri-menu-line text-3xl"
            }
          ></i>
        </button>

        <nav className={open ? "visible md:block" : "hidden md:block"}>
          {/* <nav className={"md:block" + open ? "visible" : "hidden"}> */}
          <ul className="flex flex-col p-8 fixed top-20 right-5 gap-6 bg-black/[.09] backdrop-blur-xl rounded-2xl z-40 md:static md:flex-row md:bg-transparent md:p-0 text-xl">
            <li className="relative transition-all underline-anim active">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="relative transition-all underline-anim">
              <Link href="/">
                <a>Marketplace</a>
              </Link>
            </li>
            <li className="relative transition-all underline-anim">
              <Link href="/">
                <a>Creator</a>
              </Link>
            </li>
            <div className="bg-white w-full h-[1px] md:w-[1px] md:h-auto hidden md:block"></div>
            <li className="relative transition-all underline-anim">
              <Link href="/">
                <a>How it works</a>
              </Link>
            </li>
            <li className="relative transition-all underline-anim">
              <Link href="/">
                <a>Community</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute w-[600px] h-[600px] -right-[200px] -top-[200px] -z-10">
          <Image
            src="/ellipse1.svg"
            alt="imf"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>

      <div className="absolute w-[350px] h-[734px] lg:-left-[650.34px] lg:-top-[300px] md:-left-[450.34px] md:-top-[100px] -z-30 sm:-left-[400px] -left-[150px] -top-[250px] object-fill">
        <Image
          src="/LooperGroup.svg"
          alt="imf"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default Navbar;
