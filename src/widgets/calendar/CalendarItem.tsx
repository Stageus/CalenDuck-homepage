import React, { useState } from "react";

import DropDownItem from "shared/components/DropDownItem";
import ControlDate from "widgets/calendar/ControlDate";
import DateBox from "widgets/calendar/DateBox";

const CalendarItem = () => {
  const categoryOptions = [
    "전체보기",
    "미식축구",
    "아이브",
    "뮤지컬",
    "르세라핌",
    "에스파",
    "개인",
  ];
  const yearOptions = ["전체보기", "미식축구", "아이브", "뮤지컬", "르세라핌", "에스파", "개인"];
  const monthOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();

  return (
    <section className="border border-red-500 w-[100%] h-[90vh] flex flex-col">
      {/* 드롭다운 선택 부분 */}
      <article>
        <DropDownItem options={categoryOptions} />
        <DropDownItem options={yearOptions} />
        <DropDownItem options={monthOptions} />
      </article>

      {/* 달력 부분 */}
      <article className="w-[100%] h-[100%]">
        <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
        <DateBox
          nowDate={nowDate}
          setNowDate={setNowDate}
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        />
      </article>
    </section>
  );
};

export default CalendarItem;
