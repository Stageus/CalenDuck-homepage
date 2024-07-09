import React from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import search from "shared/imgs/search.svg";
import MySubjectList from "widgets/settingSidebar/MySubjectList";

// 관심사 목록 불러오기 GET api 연결 (/subjects)
const SettingSidebar = () => {
  const managingSubject = "뮤지컬";

  // 설정 사이드바 토글
  const [settingSidebarToggle, setSettingSearchSidebarToggle] =
    useRecoilState(settingSidebarToggleAtom);
  if (!settingSidebarToggle) {
    return null;
  }

  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 관심사 검색 */}
      <article className="w-[100%] mb-[10px] flex flex-col justify-between">
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

        {/* 검색 결과 없을 때 안내 문구 */}
        <div className="text-alertColor text-xs flex justify-start">
          원하시는 관심사가 없을 경우 <br />
          하단의 1:1문의를 통해 요청해주세요
        </div>
      </article>

      {/* 검색 결과 */}
      <article className="border-dashed border-2 border-alertColor w-[100%] h-[150px] mb-[50px] overflow-auto">
        검색결과 스크롤
      </article>

      {/* 내 관심사 목록 */}
      <MySubjectList />

      {/* 하단 기능 버튼 */}
      <article className="w-[100%] h-[130px] mt-auto flex flex-col justify-between items-end">
        {managingSubject && (
          <Link to={`/manager?subject=${managingSubject}`}>
            <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">
              관심사 관리 페이지로 이동
            </button>
          </Link>
        )}
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
