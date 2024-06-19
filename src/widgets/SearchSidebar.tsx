import React, { useEffect, useRef } from "react";

import SearchItem from "widgets/SearchItem";
import SearchDateUtil from "shared/utils/SearchDateUtil";

import search from "shared/imgs/search.svg";

const SearchSidebar: React.FC = () => {
  const dummyData = [
    {
      id: "searchResult_1",
      title: "알고리즘 11주차 과제 마감akrkakdalkjdflk",
      date: "2024/06/04",
    },
    {
      id: "searchResult_2",
      title: "알고리즘 10주차 과제 마감",
      date: "2024/05/10",
    },
    {
      id: "searchResult_3",
      title: "알고리즘 9주차 과제 마감",
      date: "2024/05/03",
    },
    {
      id: "searchResult_4",
      title: "알고리즘 8주차 과제 마감",
      date: "2024/04/26",
    },
    {
      id: "searchResult_5",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_6",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_7",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_8",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_9",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_10",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_11",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
    {
      id: "searchResult_12",
      title: "알고리즘 7주차 과제 마감",
      date: "2024/04/19",
    },
  ];

  // 검색 기간의 시작점 지정에 따른 끝점의 최소값 설정
  const startDate = useRef<HTMLInputElement>(null);
  const endDate = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return SearchDateUtil(startDate, endDate);
  }, []);

  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 검색 입력 */}
      <article className="w-[100%] h-[100px] mb-[50px] flex flex-col justify-between">
        {/* 검색 기간 */}
        <div className="flex justify-between items-center">
          <input
            type="date"
            required
            className="h-[42px] p-[5px] text-sm	border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
            ref={startDate}
          />
          <div className="mx-[10px]">-</div>
          <input
            type="date"
            required
            className="h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
            ref={endDate}
          />
        </div>
        {/* 검색어 */}
        <div className="relative">
          <input
            type="text"
            required
            placeholder="스케줄을 입력하세요"
            className="w-[100%] h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
          />
          <button className="w-[20px] h-[20px] absolute top-1/2 right-[10px] transform -translate-y-1/2">
            <img src={search} alt="검색하기" className="w-[100%] h-[100%]" />
          </button>
        </div>
      </article>

      {/* 검색결과 리스트 */}
      <article className="w-[100%] h-[80%] overflow-scroll">
        {dummyData.map((elem) => {
          return <SearchItem key={elem.id} data={elem} />;
        })}
      </article>
    </section>
  );
};

export default SearchSidebar;
