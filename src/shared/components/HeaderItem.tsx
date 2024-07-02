import React from "react";

import logo from "shared/imgs/logo.svg";
import alarm from "shared/imgs/alarm.svg";
import search from "shared/imgs/search.svg";
import hamberger from "shared/imgs/hamburger.svg";

import { Link } from "react-router-dom";

const HeaderItem = () => {
  return (
    <header className="border-solid border-2 border-green-500 y-[70px] px-10 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex justify-between items-center w-[200px]">
        {/* AlarmPage로 이동 */}
        <Link to="/alarm">
          <button className="h-[30px]">
            <img src={alarm} className="w-[100%] h-[100%]" alt="" />
          </button>
        </Link>
        {/* SearchSidebar 토글 */}
        <button className="h-[30px]">
          <img src={search} className="w-[100%] h-[100%]" alt="" />
        </button>
        {/* SettingSidebar 토글 */}
        <button className="h-[30px]">
          <img src={hamberger} className="w-[100%] h-[100%]" alt="" />
        </button>
      </div>
    </header>
  );
};
export default HeaderItem;
