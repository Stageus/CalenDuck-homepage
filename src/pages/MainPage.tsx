import React from "react";

import { useRecoilState } from "recoil";
import SidebarToggleAtom from "shared/recoil/SidebarToggleAtom";

import HeaderItem from "shared/components/HeaderItem";
import CalendarItem from "widgets/calendar/CalendarItem";
import SearchSidebar from "widgets/searchSidebar/SearchSidebar";

const MainPage = () => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(SidebarToggleAtom);

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <section className="relative flex z-0">
      <article className="flex flex-col flex-grow">
        <HeaderItem />
        <CalendarItem />
      </article>

      {/* 사이드바 외부 클릭 시 닫힘 기능 */}
      {sidebarToggle && (
        <div
          className="mt-[70px] fixed inset-0 bg-lightgrayColor bg-opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <article
        className={`fixed mt-[70px] right-0 top-0 h-full z-20 transform transition-transform duration-300 ${
          sidebarToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SearchSidebar />
      </article>
    </section>
  );
};
export default MainPage;
