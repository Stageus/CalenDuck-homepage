import React, { useState } from "react";

import { useRecoilState } from "recoil";
import searchSidebarToggleAtom from "shared/recoil/searchSidebarToggleAtom";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import HeaderItem from "shared/components/HeaderItem";
import CalendarItem from "widgets/calendar/CalendarItem";
import SearchSidebar from "widgets/searchSidebar/SearchSidebar";
import SettingSidebar from "widgets/settingSidebar/SettingSidebar";

const MainPage = () => {
  const [searchSidebarToggle, setSearchSidebarToggle] = useRecoilState(searchSidebarToggleAtom);
  const [settingSidebarToggle, setSettingSidebarToggle] = useRecoilState(settingSidebarToggleAtom);

  // 사이드바 외부 회색 배경 클릭 시 닫힘
  const closeSidebar = () => {
    setSearchSidebarToggle(false);
    setSettingSidebarToggle(false);
  };

  return (
    <section className="relative flex z-0">
      <article className="flex flex-col flex-grow">
        <HeaderItem />
        <CalendarItem />
      </article>

      {/* 사이드바 외부 클릭 시 닫힘 기능 */}
      {(searchSidebarToggle || settingSidebarToggle) && (
        <div
          className="mt-[70px] fixed inset-0 bg-lightgrayColor bg-opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <article
        className={`fixed mt-[70px] right-0 top-0 h-full z-20 transform transition-transform duration-300 ${
          searchSidebarToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SearchSidebar />
      </article>

      <article
        className={`fixed mt-[70px] right-0 top-0 h-full z-20 transform transition-transform duration-300 ${
          settingSidebarToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SettingSidebar />
      </article>
    </section>
  );
};
export default MainPage;
