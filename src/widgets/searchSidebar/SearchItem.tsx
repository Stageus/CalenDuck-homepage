import React from "react";
import { Link } from "react-router-dom";
import { TScheduleItem } from "types";

const SearchItem: React.FC<{ data: TScheduleItem }> = (props) => {
  const { idx, time, contents } = props.data;

  return (
    // 클릭 시 해당 날짜에 맞는 모달창 출력
    <button className="w-full h-[42px] flex justify-between items-center p-[10px] mb-[10px] bg-lightgrayColor rounded-[5px]">
      <div className="w-[65%] font-normal text-sm truncate mr-[20px]">{contents}</div>
      <div className="w-[35%] font-normal text-sm">{time}</div>
    </button>
  );
};

export default SearchItem;
