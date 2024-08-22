import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import finish from "shared/imgs/finish.svg";
import DeleteInterestScheduleItem from "widgets/interestScheduleModal/DeleteInterestScheduleItem";
import { useCookies } from "react-cookie";
import { TScheduleItem } from "types";
import { useRecoilState } from "recoil";
import selectedDateAtom from "shared/recoil/selectedDateAtom";
import InterestScheduleAlarmOnBtn from "./InterestScheduleAlarmOnBtn";
import InterestScheduleAlarmOffBtn from "./InterestScheduleAlarmOffBtn";

const InterestScheduleItem: React.FC<{ data: TScheduleItem }> = (props) => {
  const { idx, name, time, contents, priority } = props.data;
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

  const [scheduleContents, setScheduleContents] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [selectedDate] = useRecoilState(selectedDateAtom);
  const year = selectedDate && selectedDate.getFullYear();
  const month = selectedDate && (selectedDate.getMonth() + 1).toString().padStart(2, "0");
  const date = selectedDate && selectedDate.getDate().toString().padStart(2, "0");
  const selectedTime = scheduleTime.split(":").join("");
  const fullDate = Number(`${year}${month}${date}${selectedTime}`);

  // 관심사 스케줄 수정 PUT api 연결 (/managers/schedules/:idx)
  const postEditedScheduleEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/managers/schedules/${idx}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          fullDate: fullDate,
          interestContents: scheduleContents,
        }),
      });

      if (response.ok) {
        alert(`스케줄 수정을 완료했습니다.`);
      } else if (response.status === 400) {
        console.log("정규식 위반");
        alert(`글자수 제한에 유의해주세요.`);
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert(`스케줄 수정에 실패했습니다.`);
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert(`스케줄 수정에 실패했습니다.`);
      } else if (response.status === 404) {
        console.log("해당 관심사 스케줄이 없음");
        alert(`스케줄 수정에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`스케줄 수정 중 오류가 발생했습니다.`);
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
            <InterestScheduleAlarmOnBtn idx={idx} />
          </div>
        ) : (
          <div onClick={clickSetAlarmEvent}>
            <InterestScheduleAlarmOffBtn idx={idx} />
          </div>
        )}
        {editing ? (
          <input type="time" onChange={(e) => setScheduleTime(e.target.value)} />
        ) : (
          <div className="w-[15%]">{time}</div>
        )}

        {editing ? (
          <input
            type="text"
            className="w-[350px] outline-alertColor	bg-transparent p-[10px] items-center"
            ref={titleRef}
            defaultValue={contents}
            maxLength={100}
            onChange={(e) => setScheduleContents(e.target.value)}
          />
        ) : (
          <div className="w-[350px] h-[40px] flex items-center">{contents}</div>
        )}
      </div>

      <div className={`w-[13%] flex ${editing ? "justify-center" : "justify-between"}`}>
        {editing ? (
          // 수정하기
          <button onClick={postEditedScheduleEvent}>
            <img src={finish} alt="제출하기" />
          </button>
        ) : (
          <>
            <button onClick={editTitleEvent}>
              <img src={edit} alt="수정하기" />
            </button>
            {/* 삭제하기 */}
            <DeleteInterestScheduleItem {...props.data} />
          </>
        )}
      </div>
    </article>
  );
};

export default InterestScheduleItem;
