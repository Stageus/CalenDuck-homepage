import React, { useState } from "react";

import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import DropDownItem from "shared/components/DropDownItem";

const ContactPage = () => {
  const contactOptions = ["관심사 추가 요청", "기타 문의"];
  const [selectedContact, setSelectedContact] = useState<string>(contactOptions[0]);
  const handleContactChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContact(e.target.value);
  };

  return (
    <>
      <HeaderSidebarContainer />
      <section className="mt-[70px]">
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
      </section>
    </>
  );
};

export default ContactPage;
