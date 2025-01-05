import React from "react";

const Header = () => {
  return (
    <div className="w-full h-32 bg-black text-white flex  items-center px-14 space-x-3">
      {/* 로고 */}
      <div>logo</div>
      {/* 네비게이션 */}
      <ul className="flex space-x-3">
        <li>nav</li>
        <li>nav</li>
        <li>nav</li>
        <li>nav</li>
      </ul>
    </div>
  );
};

export default Header;
