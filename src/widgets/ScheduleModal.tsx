import React from "react";
import ScheduleItem from "shared/components/ScheduleItem";

const ScheduleModal: React.FC = () => {
  const dummyData = [
    {
      id: "schedule_1",
      privacy: true,
      time: "14:00",
      category: "개인",
      title: "인프 11주차 과제",
    },
    {
      id: "schedule_2",
      privacy: true,
      time: "12:00",
      category: "개인",
      title: "콘서트 티켓팅",
    },
    {
      id: "schedule_3",
      privacy: false,
      time: "19:30",
      category: "뮤지컬",
      title: "시카고",
    },
    {
      id: "schedule_4",
      privacy: false,
      time: "23:00",
      category: "미식축구",
      title: "미국 vs 멕시코 경기",
    },
    {
      id: "schedule_5",
      privacy: true,
      time: "23:59",
      category: "개인",
      title:
        "인프 11주차 과제 마감... 안 지키면 죽음뿐이다!!!마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감마감",
    },
  ];

  return (
    <section className="bg-keyColor w-[717px] h-[486px] p-[20px] flex justify-center items-center">
      <div className="bg-white w-[100%] h-[100%]">
        {/* 최상단 */}
        <div></div>

        {/* 개인 스케줄 입력란 */}
        <article></article>

        {/* 해당 날짜의 스케줄 리스트 */}
        <article className="border-solid border-2 border-blue-500 justify-center items-center h-[70%] overflow-auto">
          {dummyData.map((elem) => {
            return <ScheduleItem key={elem.id} data={elem} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default ScheduleModal;
