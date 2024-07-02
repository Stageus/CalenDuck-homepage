import React from "react";

import { useRecoilState } from "recoil";
import searchSidebarToggleAtom from "shared/recoil/searchSidebarToggleAtom";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import HeaderItem from "shared/components/HeaderItem";
import SearchSidebar from "widgets/searchSidebar/SearchSidebar";
import SettingSidebar from "widgets/settingSidebar/SettingSidebar";
import AlarmItem from "widgets/AlarmItem";

const AlarmPage = () => {
  const dummyData = [
    {
      id: "alarm_1",
      date: "2024/06/18",
      type: 1,
      subject: "프리미어리그",
      title: "토트넘 vs 울버햄튼",
    },
    {
      id: "alarm_2",
      date: "2024/06/18",
      type: 2,
      title: "알림이 제대로 오지 않았습니다.",
      reply:
        "정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~",
    },
    {
      id: "alarm_3",
      date: "2024/06/18",
      type: 3,
      title: "미식축구",
    },
  ];

  const [searchSidebarToggle, setSearchSidebarToggle] = useRecoilState(searchSidebarToggleAtom);
  const [settingSidebarToggle, setSettingSidebarToggle] = useRecoilState(settingSidebarToggleAtom);

  // 사이드바 외부 회색 배경 클릭 시 닫힘
  const closeSidebar = () => {
    setSearchSidebarToggle(false);
    setSettingSidebarToggle(false);
  };

  return (
    <section>
      <HeaderItem />
      <h1 className="font-bold text-xl my-5">[ 알림함 ]</h1>
      <h2 className="font-bold text-l mt-7 mb-2">오늘 받은 알림</h2>
      <article className="flex flex-col items-center justify-start">
        {dummyData.map((elem) => {
          return <AlarmItem key={elem.id} data={elem} />;
        })}
      </article>

      <div className="flex items-end mt-7 mb-2">
        <h2 className="font-bold text-l mr-5">이전 알림</h2>
        <span className="text-xs text-alertColor">30일 후 자동 삭제 됩니다</span>
      </div>
      <article className="flex flex-col items-center justify-start">
        {dummyData.map((elem) => {
          return <AlarmItem key={elem.id} data={elem} />;
        })}
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
export default AlarmPage;
