import React from "react";

import ScheduleNumTagItem from "./ScheduleNumTagItem";

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

interface ArticleProps {
  sameMonth: boolean;
  sameDay: boolean;
  clickDay: boolean;
}

const AllDay = ({ day, nowDate, setNowDate, clickedDate, setClickedDate }: Props) => {
  const nowTime = new Date();

  const articleProps: ArticleProps = {
    sameMonth: nowDate.getMonth() === day.getMonth(),
    sameDay:
      nowTime.getFullYear() === day.getFullYear() &&
      nowTime.getMonth() === day.getMonth() &&
      nowTime.getDate() === day.getDate(),

    clickDay: clickedDate
      ? clickedDate.getFullYear() === day.getFullYear() &&
        clickedDate.getMonth() === day.getMonth() &&
        clickedDate.getDate() === day.getDate()
      : false,
  };

  const clickDate = () => {
    setClickedDate(day);
  };

  const dayClassNames = ["border flex justify-center items-center hover:bg-subColor"].join(" ");

  const numClassNames = [
    articleProps.sameMonth ? "font-semibold" : "font-thin",
    articleProps.sameDay ? "text-alertColor" : "text-black",
  ].join(" ");

  const tagClassNames = ["border border-red-500 flex grid grid-cols-2"].join(" ");

  return (
    <div onClick={clickDate} className={dayClassNames}>
      <p className={numClassNames}>{day.getDate()}</p>
      <div className={tagClassNames}>
        <ScheduleNumTagItem />
        <ScheduleNumTagItem />
        <ScheduleNumTagItem />
        <ScheduleNumTagItem />
      </div>
    </div>
  );
};

export default AllDay;
