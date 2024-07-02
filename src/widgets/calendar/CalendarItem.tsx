import React, { useState } from "react";

import DropDownItem from "shared/components/DropDownItem";
import ControlDate from "widgets/calendar/ControlDate";
import DateBox from "widgets/calendar/DateBox";

const CalendarItem = () => {
  const subjectOptions = ["전체보기", "미식축구", "아이브", "뮤지컬", "르세라핌", "에스파", "개인"];
  const yearOptions = ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"];
  const monthOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [selectedSubject, setSelectedSubject] = useState<string>(subjectOptions[0]);
  const [selectedYear, setSelectedYear] = useState<string>(String(nowDate.getFullYear()));
  const [selectedMonth, setSelectedMonth] = useState<string>(String(nowDate.getMonth() + 1));

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    const newDate = new Date(nowDate);
    newDate.setFullYear(Number(year));
    setNowDate(newDate);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    setSelectedMonth(month);
    const newDate = new Date(nowDate);
    newDate.setMonth(Number(month) - 1);
    setNowDate(newDate);
  };

  return (
    <section className="w-[100%] h-[90vh] flex flex-col">
      {/* 드롭다운 선택 부분 */}
      <article className="w-[20%] flex justify-between items-center mt-[30px]">
        <DropDownItem
          options={subjectOptions}
          value={selectedSubject}
          onChange={handleSubjectChange}
        />
        <DropDownItem options={yearOptions} value={selectedYear} onChange={handleYearChange} />
        <DropDownItem options={monthOptions} value={selectedMonth} onChange={handleMonthChange} />
      </article>

      {/* 달력 부분 */}
      <article className="w-[100%] h-[90%]">
        <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
        <DateBox nowDate={nowDate} setNowDate={setNowDate} />
      </article>
    </section>
  );
};

export default CalendarItem;
