import React, { useState, useRef } from "react";

import ScheduleAlarmOnBtn from "widgets/scheduleModal/ScheduleAlarmOnBtn";
import ScheduleAlarmOffBtn from "widgets/scheduleModal/ScheduleAlarmOffBtn";
import edit from "shared/imgs/edit.svg";
import remove from "shared/imgs/remove.svg";
import finish from "shared/imgs/finish.svg";

interface ScheduleItemProps {
  data: {
    privacy: boolean;
    time: string;
    interest: string;
    title: string;
  };
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props) => {
  const { privacy, time, interest, title } = props.data;

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
      titleRef.current.value = title;
    }
  };

  return (
    <article
      className={`${
        editing ? "bg-tagColor" : "bg-lightgrayColor"
      } w-[638px] h-[70px] rounded-[5px] flex justify-between items-center p-[20px] m-[5px]`}
    >
      <div className="w-[80%] flex items-center">
        {alarm ? (
          <div onClick={clickSetAlarmEvent}>
            <ScheduleAlarmOnBtn />
          </div>
        ) : (
          <div onClick={clickSetAlarmEvent}>
            <ScheduleAlarmOffBtn />
          </div>
        )}

        <div className="w-[15%]">{time}</div>
        <div className="w-[20%]">{interest}</div>
        {editing ? (
          <input
            type="text"
            className="w-[350px] outline-alertColor	bg-transparent p-[10px] items-center"
            ref={titleRef}
            defaultValue={title}
            maxLength={20}
          />
        ) : (
          <div className="w-[350px] h-[40px] flex items-center">{title}</div>
        )}
      </div>

      {/* 개인 스케줄일 때에만 수정 및 삭제 가능 */}
      {privacy && (
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
