import React from "react";

import { useRecoilState } from "recoil";
import scheduleModalToggleAtom from "shared/recoil/scheduleModalToggleAtom";

import ScheduleNumTagItem from "widgets/calendar/ScheduleNumTagItem";

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface ArticleProps {
  sameMonth: boolean;
  sameDay: boolean;
}

const dummyData = [
  {
    id: 1,
    subject: "분데스리가",
    scheduleNum: 1,
  },
  {
    id: 2,
    subject: "뮤지컬",
    scheduleNum: 2,
  },
  {
    id: 3,
    subject: "클래식",
    scheduleNum: 3,
  },
  {
    id: 4,
    subject: "에스파",
    scheduleNum: 5,
  },
  {
    id: 5,
    subject: "뉴진스의 이름이 엄청나게 길다면",
    scheduleNum: 5,
  },
];

// ScheduleNumTagItem를 위해 해당 날짜에 해당하는 각 subject 별 스케줄 개수 GET api 연결
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
  const [openModal, setOpenModal] = useRecoilState(scheduleModalToggleAtom);
  const openScheduleModalEvent = () => {
    setOpenModal(!openModal);
  };

  const dayClassNames = [articleProps.sameMonth && "hover:bg-subColor"].join(" ");
  const numClassNames = [
    articleProps.sameMonth ? "font-semibold" : "font-thin",
    articleProps.sameDay ? "text-alertColor" : "text-black",
  ].join(" ");

  return (
    <button
      onClick={articleProps.sameMonth ? openScheduleModalEvent : undefined}
      className={`border flex justify-center items-center grid flex-wrap content-between ${dayClassNames}`}
    >
      <p className={numClassNames}>{day.getDate()}</p>
      {articleProps.sameMonth && (
        <div className="flex grid grid-cols-2">
          {dummyData.map((elem) => {
            return <ScheduleNumTagItem key={elem.id} data={elem} />;
          })}
        </div>
      )}
    </button>
  );
};

export default AllDay;
