"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <Accordion sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div
        className={`fixed bg-black/20 w-full h-full top-[81px] left-0 transition-opacity duration-500 ${
          sideBarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSideBarOpen(false)}
      />
      <div
        className={`fixed top-[81px] w-2/3 right-0 bg-white h-full transition-transform duration-500 ${
          sideBarOpen
            ? "translate-x-0 ease-out"
            : "translate-x-full ease-in-out"
        }`}
        style={{
          transitionTimingFunction: sideBarOpen
            ? "cubic-bezier(0.4, 0, 0.7, 1)"
            : "cubic-bezier(0.8, 0, 1, 0.6)",
        }}
      ></div>
    </>
  );
};

export default SideBar;
