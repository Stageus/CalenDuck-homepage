import React from "react";
import { Link } from "react-router-dom";

interface SearchItemProps {
  data: {
    title: string;
    date: string;
  };
}

const SearchItem: React.FC<SearchItemProps> = (props) => {
  const { title, date } = props.data;

  return (
    // 클릭 시 해당 날짜에 맞는 모달창 출력
    <Link to="/">
      <button
        className="w-[100%] h-[42px] flex justify-between items-center p-[10px] mb-[10px] bg-lightgrayColor rounded-[5px]"
        title={title}
      >
        <div className="w-[65%] font-normal text-sm truncate mr-[20px]">{title}</div>
        <div className="w-[35%] font-normal text-sm">{date}</div>
      </button>
    </Link>
  );
};

export default SearchItem;
