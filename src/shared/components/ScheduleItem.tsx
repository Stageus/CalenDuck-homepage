import React, { useState, useRef } from "react";

import alarmOn from "../imgs/alarmOn.svg";
import alarmOff from "../imgs/alarmOff.svg";
import edit from "../imgs/edit.svg";
import remove from "../imgs/remove.svg";
import finish from "../imgs/finish.svg";

const ScheduleItem = () => {
  const dummyData = {
    private: true, // 개인 스케줄 여부
    time: "14:00",
    category: "개인",
    title: "인프 11주차 과제",
  };

  // 스케줄 알람 여부 토글
  const [alarm, setAlarm] = useState<boolean>(false);
  const clickSetAlarmEvent = () => {
    setAlarm(!alarm);
  };

  // 수정 중인 타이틀 반영
  const titleRef = useRef<HTMLInputElement>(null);

  // 수정하기 버튼 클릭 시
  // 1. title input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const [editing, setEditing] = useState<boolean>(false);
  const editTitleEvent = () => {
    setEditing(!editing);
    if (!editing && titleRef.current) {
      titleRef.current.value = dummyData.title;
    }
  };

  return (
    <article
      className={`${
        editing ? "bg-tagColor" : "bg-lightgrayColor"
      } w-[638px] h-[70px] rounded-[5px] flex justify-between items-center p-[20px]`}
    >
      <div className="w-[80%] flex items-center ">
        <button onClick={clickSetAlarmEvent} className="mr-[20px]">
          <img src={alarm ? alarmOff : alarmOn} alt={alarm ? "알람off" : "알람on"} />
        </button>
        <div className="w-[15%]">{dummyData.time}</div>
        <div className="w-[20%]">{dummyData.category}</div>
        {editing ? (
          <input
            type="text"
            className="w-[60%] outline-alertColor	bg-transparent p-[10px]"
            ref={titleRef}
            defaultValue={dummyData.title}
          />
        ) : (
          <div className="w-[60%]">{dummyData.title}</div>
        )}
      </div>

      {/* 개인 스케줄일 때에만 수정 및 삭제 가능 */}
      {dummyData.private && (
        <div className={`w-[13%] flex ${editing ? "justify-center" : "justify-between"}`}>
          {editing ? (
            <>
              <button onClick={editTitleEvent}>
                <img src={finish} alt="제출하기" />
              </button>
            </>
          ) : (
            <>
              <button onClick={editTitleEvent}>
                <img src={edit} alt="수정하기" />
              </button>
              <button>
                <img src={remove} alt="삭제하기" />
              </button>
            </>
          )}
        </div>
      )}
    </article>
  );
};

export default ScheduleItem;
