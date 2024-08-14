import React, { useState, useRef } from "react";

import ScheduleAlarmOnBtn from "widgets/scheduleModal/ScheduleAlarmOnBtn";
import ScheduleAlarmOffBtn from "widgets/scheduleModal/ScheduleAlarmOffBtn";
import edit from "shared/imgs/edit.svg";
import remove from "shared/imgs/remove.svg";
import finish from "shared/imgs/finish.svg";
import { TScheduleItem } from "types";
import { useCookies } from "react-cookie";

const ScheduleItem: React.FC<{ data: TScheduleItem }> = (props) => {
  const { idx, name, time, type, contents, priority } = props.data;
  const [cookies] = useCookies(["token"]);

  // 스케줄 알람 여부 버튼 토글
  const [alarm, setAlarm] = useState<boolean>(priority);
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
      titleRef.current.value = contents;
    }
  };

  // 스케줄 삭제 DELETE api (/schedules/:idx)
  const deleteScheduleEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/schedules/${idx}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (response.ok) {
        alert(`해당 스케줄을 삭제했습니다.`);
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert(`스케줄 삭제에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`스케줄 삭제 중 오류가 발생했습니다.`);
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
            <ScheduleAlarmOnBtn idx={idx} />
          </div>
        ) : (
          <div onClick={clickSetAlarmEvent}>
            <ScheduleAlarmOffBtn idx={idx} />
          </div>
        )}

        <div className="w-[15%]">{time}</div>
        <div className="w-[20%]">{name}</div>
        {editing ? (
          <input
            type="text"
            className="w-[350px] outline-alertColor	bg-transparent p-[10px] items-center"
            ref={titleRef}
            defaultValue={contents}
            maxLength={20}
          />
        ) : (
          <div className="w-[350px] h-[40px] flex items-center">{contents}</div>
        )}
      </div>

      {/* 개인 스케줄일 때에만 수정 및 삭제 가능 */}
      {type === "personal" && (
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
              <button onClick={deleteScheduleEvent}>
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
