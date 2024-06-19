import React from "react";
import { Link } from "react-router-dom";

const SearchItem = () => {
  const dummyData = {
    title: "알고리즘 11주차 과제 마감akrkakdalkjdflk",
    date: "2024/05/10",
  };

  return (
    // 클릭 시 해당 날짜에 맞는 모달창 출력
    <Link to="/">
      <button
        className="h-[42px] flex justify-between items-center p-[10px] bg-lightgrayColor rounded-[5px]"
        title={dummyData.title}
      >
        <div className="w-[130px] font-normal text-sm truncate mr-[20px]">{dummyData.title}</div>
        <div className="w-[80px] font-normal text-sm">{dummyData.date}</div>
      </button>
    </Link>
  );
};

export default SearchItem;
