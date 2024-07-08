import React from "react";

import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import searchSidebarToggleAtom from "shared/recoil/searchSidebarToggleAtom";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import logo from "shared/imgs/logo.svg";
import alarm from "shared/imgs/alarm.svg";
import search from "shared/imgs/search.svg";
import hamberger from "shared/imgs/hamburger.svg";

import HeaderAlarmNumTagItem from "shared/components/HeaderAlarmNumTagItem";

import { Link } from "react-router-dom";

const HeaderItem = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [searchSidebarToggle, setSearchSidebarToggle] = useRecoilState(searchSidebarToggleAtom);
  const [settingSidebarToggle, setSettingSidebarToggle] = useRecoilState(settingSidebarToggleAtom);

  // 검색 사이드바 토글 이벤트
  const searchBtnToggleEvent = () => {
    setSearchSidebarToggle(!searchSidebarToggle);
    setSettingSidebarToggle(false); // 설정 사이드바는 닫음
  };
  // 설정 사이드바 토글 이벤트
  const settingBtnToggleEvent = () => {
    setSettingSidebarToggle(!settingSidebarToggle);
    setSearchSidebarToggle(false); // 검색 사이드바는 닫음
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white y-[70px] flex justify-between items-center z-50 px-[200px]">
      <Link to="/main">
        <img src={logo} alt="메인" />
      </Link>

      {(pathname === "/main" || pathname === "/alarm" || pathname === "/contact") && (
        <div className="flex justify-between items-center w-[200px]">
          {/* AlarmPage로 이동 */}
          <Link to="/alarm">
            <button className="h-[30px] relative">
              <img src={alarm} className="w-[100%] h-[100%]" alt="알림" />
              <div className="absolute top-[-7px] right-[-13px]">
                <HeaderAlarmNumTagItem />
              </div>
            </button>
          </Link>
          {/* SearchSidebar 토글 */}
          <button className="h-[30px]" onClick={searchBtnToggleEvent}>
            <img src={search} className="w-[100%] h-[100%]" alt="검색" />
          </button>
          {/* SettingSidebar 토글 */}
          <button className="h-[30px]" onClick={settingBtnToggleEvent}>
            <img src={hamberger} className="w-[100%] h-[100%]" alt="설정" />
          </button>
        </div>
      )}
    </header>
  );
};
export default HeaderItem;
