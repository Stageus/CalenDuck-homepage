import React from "react";
import { Link } from "react-router-dom";

import search from "shared/imgs/search.svg";
import MySubjectItem from "widgets/settingSidebar/MySubjectItem";

const SettingSidebar = () => {
  const dummyData = [
    {
      id: "mySubject_1",
      subject: "미식축구",
    },
    {
      id: "mySubject_2",
      subject: "야구",
    },
    {
      id: "mySubject_3",
      subject: "분데스리가",
    },
    {
      id: "mySubject_4",
      subject: "NBA",
    },
    {
      id: "mySubject_5",
      subject: "뮤지컬",
    },
  ];
  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 검색기능 */}
      <article className="w-[100%] h-[80px] mb-[50px] flex flex-col justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="관심사를 입력하세요"
            className="w-[100%] h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
          />
          <button className="w-[20px] h-[20px] absolute top-1/2 right-[10px] transform -translate-y-1/2">
            <img src={search} alt="검색하기" className="w-[100%] h-[100%]" />
          </button>
        </div>

        <div className="text-alertColor text-xs flex justify-start">
          원하시는 관심사가 없을 경우 <br />
          하단의 1:1문의를 통해 요청해주세요
        </div>
      </article>

      {/* 관심사 목록 */}
      <article className="w-[100%]">
        <div className="flex justify-start items-end">
          <h3 className="mr-[5px] font-semibold">내 관심사</h3>
          <span className="text-alertColor text-xs">최대 5개까지 선택 가능합니다</span>
        </div>
        <div className="w-[100%] h-[250px] mt-[10px] flex flex-col justify-start">
          {dummyData.map((elem) => {
            return <MySubjectItem key={elem.id} data={elem} />;
          })}
        </div>
      </article>

      {/* 하단 기능 버튼 */}
      <article className="w-[100%] h-[130px] mt-auto flex flex-col justify-between items-end">
        <Link to="/manage?subject=미식축구">
          <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">
            관심사 관리 페이지로 이동
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">
            1:1문의
          </button>
        </Link>
        <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">
          로그아웃
        </button>
        <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">
          탈퇴하기
        </button>
      </article>
    </section>
  );
};

export default SettingSidebar;
