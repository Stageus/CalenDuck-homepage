import React from "react";

import WeekBox from "widgets/calendar/WeekBox";
import AllDay from "widgets/calendar/AllDay";
import { TScheduleLabelItem } from "types";

const monthList = (nowDate: Date) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

  const result: Date[] = [];
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i));
  }

  return result;
};

interface Props {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  scheduleListData: TScheduleLabelItem[];
}

const DateBox = ({ nowDate, setNowDate, scheduleListData }: Props) => {
  const allDay: Date[] = monthList(nowDate);
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <article className="w-full h-[70vh] grid grid-cols-7 ">
      {weeks.map((week: string) => {
        return <WeekBox key={week} weekName={week} />;
      })}

      {allDay.map((day: Date) => {
        return (
          <AllDay
            key={day.toISOString()}
            day={day}
            nowDate={nowDate}
            setNowDate={setNowDate}
            scheduleListData={scheduleListData}
          />
        );
      })}
    </article>
  );
};

export default DateBox;
