import React from "react";
import { FiSearch } from "react-icons/fi";

import Image from "next/image";
import SideBar from "./SideBar/SideBar";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-6 space-x-3 border-b-[1px]">
      {/* 로고 */}
      <div className="flex items-center space-x-2">
        <Image
          src="/coding.png"
          alt="blog-logo-developer"
          width={25}
          height={25}
          className="mb-1"
        />
        <p className="text-2xl font-TheJamsil4Medium">
          <span className="font-TheJamsil5Bold">WIN</span>기술블로그
        </p>
      </div>

      <div className="flex space-x-3 text-2xl items-center">
        {/* 서치 바 */}
        <div>
          <FiSearch />
        </div>
        {/* 아코디언 메뉴 */}
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
