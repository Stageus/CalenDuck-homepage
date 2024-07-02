import React from "react";

import ScheduleNumTagItem from "./ScheduleNumTagItem";

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface ArticleProps {
  sameMonth: boolean;
  sameDay: boolean;
}

const AllDay = ({ day, nowDate, setNowDate }: Props) => {
  const nowTime = new Date();

  const articleProps: ArticleProps = {
    sameMonth: nowDate.getMonth() === day.getMonth(),
    sameDay:
      nowTime.getFullYear() === day.getFullYear() &&
      nowTime.getMonth() === day.getMonth() &&
      nowTime.getDate() === day.getDate(),
  };

  // 해당 날짜에 해당하는 ScheduleModal 열림
  const openScheduleModalEvent = () => {};

  const dayClassNames = [articleProps.sameMonth && "hover:bg-subColor"].join(" ");
  const numClassNames = [
    articleProps.sameMonth ? "font-semibold" : "font-thin",
    articleProps.sameDay ? "text-alertColor" : "text-black",
  ].join(" ");

  return (
    <div
      onClick={openScheduleModalEvent}
      className={`border flex justify-center items-center grid flex-wrap content-between ${dayClassNames}`}
    >
      <p className={numClassNames}>{day.getDate()}</p>
      {/* 해당 달의 스케줄만 보임 */}
      {articleProps.sameMonth && (
        <div className="flex grid grid-cols-2">
          <ScheduleNumTagItem />
          <ScheduleNumTagItem />
          <ScheduleNumTagItem />
          <ScheduleNumTagItem />
        </div>
      )}
    </div>
  );
};

export default AllDay;
