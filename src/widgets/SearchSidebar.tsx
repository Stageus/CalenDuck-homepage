import React from "react";

import SearchItem from "widgets/SearchItem";

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
  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 검색 입력 */}
      <article className="w-[100%] h-[100px] mb-[50px] flex flex-col justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="스케줄을 입력하세요"
            className="w-[100%] h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
          />
          <button className="w-[20px] h-[20px] absolute top-1/2 right-[10px] transform -translate-y-1/2">
            <img src={search} alt="검색하기" className="w-[100%] h-[100%]" />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="date"
            className="h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
          />
          <div className="mx-[10px]">-</div>
          <input
            type="date"
            className="h-[42px] p-[5px] border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
          />
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
