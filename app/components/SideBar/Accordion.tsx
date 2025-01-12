"use client";

import React from "react";

const style =
  "bg-black/70 w-6 h-[2px] rounded-3xl transition-all duration-500 ease-in-out ";

const Accordion = ({
  sideBarOpen,
  setSideBarOpen,
}: {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="flex flex-col space-y-[6px] cursor-pointer"
      onClick={() => setSideBarOpen((prev) => !prev)}
    >
      <span
        className={`${style} ${sideBarOpen && "translate-y-2 rotate-45"} `}
      ></span>
      <span className={`${style} ${sideBarOpen && "opacity-0"} `}></span>
      <span
        className={`${style} ${sideBarOpen && "-translate-y-2 -rotate-45"} `}
      ></span>
    </div>
  );
};

export default Accordion;
