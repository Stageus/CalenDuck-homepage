import React, { useState } from "react";

import { useRecoilState } from "recoil";
import searchSidebarToggleAtom from "shared/recoil/searchSidebarToggleAtom";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import HeaderItem from "shared/components/HeaderItem";
import SearchSidebar from "widgets/searchSidebar/SearchSidebar";
import SettingSidebar from "widgets/settingSidebar/SettingSidebar";
import DropDownItem from "shared/components/DropDownItem";

const ContactPage = () => {
  const [searchSidebarToggle, setSearchSidebarToggle] = useRecoilState(searchSidebarToggleAtom);
  const [settingSidebarToggle, setSettingSidebarToggle] = useRecoilState(settingSidebarToggleAtom);

  // 사이드바 외부 회색 배경 클릭 시 닫힘
  const closeSidebar = () => {
    setSearchSidebarToggle(false);
    setSettingSidebarToggle(false);
  };

  const contactOptions = ["관심사 추가 요청", "기타 문의"];
  const [selectedContact, setSelectedContact] = useState<string>(contactOptions[0]);
  const handleContactChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContact(e.target.value);
  };

  return (
    <section>
      <HeaderItem />

      <h1 className="font-bold text-xl my-5">[ 1:1 문의 ]</h1>

      <article className="flex w-[100%] justify-start items-center mt-7 mb-2">
        <h2 className="font-bold text-l mr-5">문의 유형</h2>
        <div className="border border-black w-[90%] h-[50px] flex justify-start p-[10px]">
          <DropDownItem
            options={contactOptions}
            value={selectedContact}
            onChange={handleContactChange}
          />
        </div>
      </article>
      {selectedContact === "관심사 추가 요청" && (
        <span className="text-alertColor my-[30px]">
          ️※ 관심사 추가 요청이 수락될 경우, <br />
          해당 관심사에 대한 관리자가 되어 관련 스케줄에 대한 기입, 수정, 삭제 등의 책임을 지니게
          됩니다. 
        </span>
      )}

      <article className="flex w-[100%] justify-start items-center mt-7 mb-5">
        <h2 className="font-bold text-l mr-5">문의 제목</h2>
        <input className="border border-black w-[90%] h-[50px] p-[10px]" type="text" />
      </article>

      <article className="flex w-[100%] justify-start items-center mt-7 mb-2">
        <h2 className="font-bold text-l mr-5">문의 내용</h2>
        <textarea className="border border-black w-[90%] h-[300px] p-[10px]" />
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

export default ContactPage;
