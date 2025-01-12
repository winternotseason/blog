"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <Accordion sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div
        className={`z-10 fixed bg-black/20 w-full h-full top-[81px] left-0 transition-opacity duration-500 ${
          sideBarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSideBarOpen(false)}
      />
      <div
        className={`flex flex-col justify-between z-20 fixed top-[81px] w-2/3 right-0 bg-white transition-transform duration-500 ${
          sideBarOpen
            ? "translate-x-0 ease-out"
            : "translate-x-full ease-in-out"
        }`}
        style={{
          transitionTimingFunction: sideBarOpen
            ? "cubic-bezier(0.4, 0, 0.7, 1)"
            : "cubic-bezier(0.8, 0, 1, 0.6)",
          height: "calc(100dvh - 81px)",
        }}
      >
        <ul>
          <li className="px-6 py-4 border-b-[1px] hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            Node.js
          </li>
          <li className="px-6 py-4 border-b-[1px] hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            Next.js
          </li>
          <li className="px-6 py-4 border-b-[1px] hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            React
          </li>
          <li className="px-6 py-4 border-b-[1px] hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            Typescript
          </li>
          <li className="px-6 py-4 border-b-[1px] hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            Library
          </li>
        </ul>
        <footer className="flex justify-end text-sm text-black/50 space-x-2 px-6 py-4">
          <p>Github</p>
          <p>dev 황서연</p>
        </footer>
      </div>
    </>
  );
};

export default SideBar;
