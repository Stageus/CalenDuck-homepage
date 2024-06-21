import React, { useState } from "react";

import ScheduleItem from "widgets/scheduleModal/ScheduleItem";

import alarmOn from "shared/imgs/alarmOn.svg";
import alarmOff from "shared/imgs/alarmOff.svg";
import finish from "shared/imgs/finish.svg";
import exit from "shared/imgs/exit.svg";

const ScheduleModal: React.FC = () => {
  const dummyData = [
    {
      id: "schedule_1",
      date: "2024/06/18",
      privacy: true,
      time: "14:00",
      category: "개인",
      title: "인프 11주차 과제",
    },
    {
      id: "schedule_2",
      date: "2024/06/18",
      privacy: true,
      time: "12:00",
      category: "개인",
      title: "콘서트 티켓팅",
    },
    {
      id: "schedule_3",
      date: "2024/06/18",
      privacy: false,
      time: "19:30",
      category: "뮤지컬",
      title: "시카고",
    },
    {
      id: "schedule_4",
      date: "2024/06/18",
      privacy: false,
      time: "23:00",
      category: "미식축구",
      title: "미국 vs 멕시코 경기",
    },
    {
      id: "schedule_5",
      date: "2024/06/18",
      privacy: true,
      time: "23:59",
      category: "개인",
      title: "가나다라마바사아자차카타파하가나다라마바사",
    },
  ];

  // 스케줄 알람 여부 토글
  const [alarm, setAlarm] = useState<boolean>(false);
  const clickSetAlarmEvent = () => {
    setAlarm(!alarm);
  };

  // 모달창 닫힘 이벤트
  const clickCloseModalEvent = () => {};

  return (
    <section className="bg-keyColor w-[717px] h-[486px] p-[20px] flex justify-center items-center drop-shadow">
      <div className="bg-white w-[100%] h-[100%] flex flex-col items-center ">
        {/* 모달창 닫기 */}
        <div className="w-[100%] flex justify-end pt-[5px] pr-[5px]">
          <button onClick={clickCloseModalEvent}>
            <img src={exit} />
          </button>
        </div>

        {/* 최상단 */}
        <article className="w-[655px] h-[15%] px-[20px] flex justify-start items-center">
          <select name="관심사목록" className="mr-[20px]">
            <option value="select">전체보기</option>
            <option>미식축구</option>
            <option>뮤지컬</option>
            <option>에스파</option>
            <option>아이브</option>
            <option>개인</option>
          </select>

          <div className="font-bold	text-xl">2024/06/18</div>
        </article>

        {/* 개인 스케줄 입력란 */}
        <article className="w-[655px] h-[15%] p-[20px] flex justify-between border-y border-black">
          <div className="w-[85%] flex items-center">
            <button onClick={clickSetAlarmEvent} className="w-[25px] mr-[15px]">
              <img
                src={alarm ? alarmOff : alarmOn}
                alt={alarm ? "알람off" : "알람on"}
                className="w-[100%]"
              />
            </button>
            <div>
              <input type="time" />
            </div>
            <input
              type="text"
              className="w-[350px] outline-alertColor bg-transparent p-[10px] ml-[30px] items-center"
              maxLength={20}
            />
          </div>

          <div className="w-[10%] flex justify-center">
            <button>
              <img src={finish} alt="제출하기" />
            </button>
          </div>
        </article>

        {/* 해당 날짜의 스케줄 리스트 */}
        <article className="flex flex-col items-center justify-start h-[70%] overflow-auto">
          {dummyData.map((elem) => {
            return <ScheduleItem key={elem.id} data={elem} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default ScheduleModal;
