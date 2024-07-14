import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DropDownItem from "shared/components/DropDownItem";
import ControlDate from "widgets/calendar/ControlDate";
import DateBox from "widgets/calendar/DateBox";

// 특정 년월 스케줄 전체 불러오기 GET api 연결 (/schedules?date)
const CalendarItem = () => {
  // URL 쿼리스트링을 통한 date의 year, month 추출
  const location = useLocation();
  const navigate = useNavigate();
  const urlSearch = new URLSearchParams(location.search);
  const initialDate =
    urlSearch.get("date") ||
    `${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, "0")}`;

  // URL 쿼리스트링을 통한 내가 manager인 interest 추출
  const [status, setStatus] = useState<string>("general"); // 혹은 "manager"
  const managingInterest = urlSearch.get("interest");

  useEffect(() => {
    let queryString = `/main?date=${initialDate}`;
    if (status === "manager" && managingInterest) {
      queryString += `&interest=${managingInterest}`;
    }
  }, [initialDate, status, managingInterest]);

  const interestOptions = [
    "전체보기",
    "미식축구",
    "아이브",
    "뮤지컬",
    "르세라핌",
    "에스파",
    "개인",
  ];
  const yearOptions = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const monthOptions = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  // date 값을 분해하여 초기 state 설정
  const initialYear = initialDate.substring(0, 4);
  const initialMonth = initialDate.substring(4, 6);

  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [selectedInterest, setSelectedInterest] = useState<string>(interestOptions[0]);
  const [selectedYear, setSelectedYear] = useState<string>(initialYear);
  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth);

  const handleInterestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInterest(e.target.value);
  };

  const updateDate = (year: string, month: string) => {
    const newDate = `${year}${month}`;
    const params = new URLSearchParams(location.search);
    params.set("date", newDate);

    // 사용자가 "manager" 상태이고 관리 중인 interest가 있다면
    if (status === "manager" && managingInterest) {
      params.set("interest", managingInterest);
    }

    // 해당 params로 이동
    navigate({ search: params.toString() });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    updateDate(year, selectedMonth);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    setSelectedMonth(month);
    updateDate(selectedYear, month);
  };

  useEffect(() => {
    const newDate = new Date(Number(selectedYear), Number(selectedMonth) - 1);
    setNowDate(newDate);
  }, [selectedYear, selectedMonth]);

  return (
    <section className="w-[100%] h-[80vh] flex flex-col mt-[70px]">
      {/* 드롭다운 선택 부분 */}
      <article className="w-[25%] flex justify-between items-end">
        {managingInterest ? (
          // manager 계정으로 로그인
          <div className="flex flex-col">
            <span className="text-xs">👑 내가 관리자인 관심사</span>
            <span className="text-xl font-bold">{managingInterest}</span>
          </div>
        ) : (
          // general 계정으로 로그인
          <DropDownItem
            options={interestOptions}
            value={selectedInterest}
            onChange={handleInterestChange}
          />
        )}

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
