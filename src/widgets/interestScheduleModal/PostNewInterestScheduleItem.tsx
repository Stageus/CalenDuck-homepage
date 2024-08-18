import React, { useState } from "react";

import finish from "shared/imgs/finish.svg";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import selectedDateAtom from "shared/recoil/selectedDateAtom";

// 관심사 스케줄 생성 POST api 연결 (/managers/schedules/interests)
const PostNewInterestScheduleItem = () => {
  const [cookies] = useCookies(["token"]);
  const [scheduleTime, setScheduleTime] = useState("");
  const [interestContents, setInterestContents] = useState("");
  const [selectedDate] = useRecoilState(selectedDateAtom);
  const year = selectedDate && selectedDate.getFullYear();
  const month = selectedDate && (selectedDate.getMonth() + 1).toString().padStart(2, "0");
  const date = selectedDate && selectedDate.getDate().toString().padStart(2, "0");
  const selectedTime = scheduleTime.split(":").join("");
  const fullDate = Number(`${year}${month}${date}${selectedTime}`);

  const submitNewInterestSchedule = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/managers/schedules/interests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
          body: JSON.stringify({
            fullDate: fullDate,
            interestContents: interestContents,
          }),
        }
      );

      if (response.ok) {
        console.log("새로운 관심사스케줄 추가 성공");
      } else if (response.status === 400) {
        console.log("정규식 위반");
        alert("글자수 제한에 유의해주세요.");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert("스케줄 등록에 실패하셨습니다.");
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert("스케줄 등록에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("스케줄 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <article className="w-[655px] h-[15%] p-[20px] flex justify-between border-y border-black">
      <div className="w-[85%] flex items-center">
        <div>
          <input type="time" onChange={(e) => setScheduleTime(e.target.value)} />
        </div>
        <input
          type="text"
          className="w-[350px] border border-alertColor outline-alertColor bg-transparent p-[10px] ml-[30px] items-center"
          maxLength={20}
          placeholder="새로운 스케줄 입력"
          onChange={(e) => setInterestContents(e.target.value)}
        />
      </div>

      <div className="w-[10%] flex justify-center">
        <button onClick={submitNewInterestSchedule}>
          <img src={finish} alt="제출하기" />
        </button>
      </div>
    </article>
  );
};

export default PostNewInterestScheduleItem;
