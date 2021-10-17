import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "block px-4 py-2 md:py-5 text-rose-200 hover:text-white";

  return (
    <header className="bg-gradient-to-br from-rose-500 to-pink-500">
      <nav className="flex flex-col md:flex-row">
        <div className="flex justify-between items-center px-4 py-4 md:py-0 border-b border-rose-400 md:border-b-0">
          <div>
            <a href="#" className="uppercase font-semibold text-white">
              Brand
            </a>
          </div>
          <div>
            <button
              type="button"
              className="focus:outline-none text-white block md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex justify-between w-full py-4 md:py-0`}
        >
          <div className="flex flex-col md:flex-row">
            <Link href="#">
              <a className={linkClass}>Blog</a>
            </Link>
            <Link href="#">
              <a className={linkClass}>Gallery</a>
            </Link>
            <Link href="#">
              <a className={linkClass}>About</a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <Link href="/login">
              <a className={linkClass}>Sign in</a>
            </Link>
            <Link href="#">
              <a className={linkClass}>Sign up</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
