import React from "react";
import { useLocation } from "react-router-dom";

import ManagerScheduleItem from "widgets/managerScheduleModal/ManagerScheduleItem";
import finish from "shared/imgs/finish.svg";

const ManagerScheduleModal: React.FC = () => {
  const dummyData = [
    {
      id: "schedule_1",
      subject: "뮤지컬",
      time: "14:00",
      title: "인프 11주차 과제",
    },
    {
      id: "schedule_2",
      subject: "뮤지컬",
      time: "12:00",
      title: "콘서트 티켓팅",
    },
    {
      id: "schedule_3",
      subject: "뮤지컬",
      time: "19:30",
      title: "시카고",
    },
    {
      id: "schedule_4",
      subject: "뮤지컬",
      time: "23:00",
      title: "미국 vs 멕시코 경기",
    },
    {
      id: "schedule_5",
      subject: "뮤지컬",
      time: "23:59",
      title: "가나다라마바사아자차카타파하가나다라마바사",
    },
  ];

  // URL 쿼리스트링을 통한 내가 manager인 subject 추출
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const managingSubject = urlSearch.get("subject");

  // 해당 subject의 새로운 스케줄 PUSH api 연결
  const submitNewSubjectSchedule = () => {
    // subject, date, time, title 데이터 전달
  };

  // 해당 날짜의 스케줄 목록 GET api 연결
  return (
    <section className="bg-keyColor w-[717px] h-[486px] p-[20px] flex justify-center items-center drop-shadow">
      <div className="bg-white w-[100%] h-[100%] flex flex-col items-center ">
        {/* 상단 */}
        <article className="w-[655px] h-[15%] px-[20px] flex justify-start items-center">
          <div className="font-bold	text-xl mr-[20px]">{managingSubject}</div>
          <div className="font-bold	text-xl">2024/06/18</div>
        </article>

        {/* 해당 subject 새로운 스케줄 입력란 */}
        <article className="w-[655px] h-[15%] p-[20px] flex justify-between border-y border-black">
          <div className="w-[85%] flex items-center">
            <div>
              <input type="time" />
            </div>
            <input
              type="text"
              className="w-[350px] border border-alertColor outline-alertColor bg-transparent p-[10px] ml-[30px] items-center"
              maxLength={20}
              placeholder="새로운 스케줄 입력"
            />
          </div>

          <div className="w-[10%] flex justify-center">
            <button onClick={submitNewSubjectSchedule}>
              <img src={finish} alt="제출하기" />
            </button>
          </div>
        </article>

        {/* 해당 날짜의 스케줄 리스트 */}
        <article className="flex flex-col items-center justify-start h-[70%] overflow-auto">
          {dummyData.map((elem) => {
            return <ManagerScheduleItem key={elem.id} data={elem} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default ManagerScheduleModal;
