import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import settingSidebarToggleAtom from "shared/recoil/settingSidebarToggleAtom";

import search from "shared/imgs/search.svg";
import MyInterestList from "widgets/settingSidebar/MyInterestList";
import LogoutItem from "widgets/settingSidebar/LogoutItem";
import DeleteAccountItem from "widgets/settingSidebar/DeleteAccountItem";
import { useCookies } from "react-cookie";
import { TInterestItem } from "types";
import InterestListItem from "./InterestListItem";

// 관심사 목록 불러오기 GET api 연결 (/interests/all)
const SettingSidebar = () => {
  const date = `${new Date().getFullYear()}${(new Date().getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  const managingInterest = "뮤지컬";

  const [interestListData, setInterestListData] = useState<TInterestItem[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const getInterestList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/notifications`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const result = await response.json();
        console.log("알람 리스트", result);

        if (response.status === 200) {
          setInterestListData(result.list);
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };
    getInterestList();
    console.log(interestListData);
  }, [cookies.token]);

  const dummyData = [
    {
      interestIdx: 1,
      interestName: "뮤지컬",
    },
    {
      interestIdx: 2,
      interestName: "프론트엔드",
    },
    {
      interestIdx: 3,
      interestName: "백엔드",
    },
    {
      interestIdx: 4,
      interestName: "롤토체스",
    },
  ];

  // 설정 사이드바 토글
  const [settingSidebarToggle, setSettingSearchSidebarToggle] =
    useRecoilState(settingSidebarToggleAtom);
  if (!settingSidebarToggle) {
    return null;
  }

  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 관심사 검색 */}
      <article className="w-full mb-[10px] flex flex-col justify-between">
        <div className="relative">
          <form>
            <input
              type="search"
              placeholder="관심사를 입력하세요"
              className="w-full h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
              // onChange={(e) => setInterestListData(e.target.value)}
            />
            <button className="w-[20px] h-[20px] absolute top-1/2 right-[20px] transform -translate-y-1/2">
              <img src={search} alt="검색하기" className="w-full h-full" />
            </button>
          </form>
        </div>

        {/* 검색 결과 없을 때 안내 문구 */}
        <div className="text-alertColor text-xs flex justify-start mt-1">
          원하시는 관심사가 없을 경우 <br />
          하단의 1:1문의를 통해 요청해주세요
        </div>

        {interestListData ? (
          <article className="border-dashed border-2 border-alertColor w-full h-[100px] mb-[10px] overflow-auto">
            {dummyData.map((elem) => {
              return <InterestListItem key={elem.interestIdx} data={elem} />;
            })}
          </article>
        ) : (
          <div>선택 가능한 관심사가 없습니다. 1:1문의를 통해 원하는 관심사를 제안해주세요.</div>
        )}
      </article>

      {/* 내 관심사 목록 */}
      <MyInterestList />

      {/* 하단 기능 버튼 */}
      <article className="w-full h-[130px] mt-auto flex flex-col justify-between items-end">
        {managingInterest && (
          <Link to={`/manager?date=${date}&interest=${managingInterest}`}>
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

        {/* 로그아웃 */}
        <LogoutItem />

        {/* 탈퇴하기 */}
        <DeleteAccountItem />
      </article>
    </section>
  );
};

export default SettingSidebar;
