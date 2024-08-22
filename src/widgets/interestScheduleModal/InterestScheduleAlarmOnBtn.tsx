import React from "react";
import { useCookies } from "react-cookie";

import alarmOn from "shared/imgs/alarmOn.svg";

// 스케줄 중요 알림 설정 POST api (/schedules/interest/:idx/notify)
const InterestScheduleAlarmOnBtn: React.FC<{ idx?: number }> = ({ idx }) => {
  const [cookies] = useCookies(["token"]);

  const scheduleAlarmOnEvent = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/schedules/interest/${idx}/notify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.ok) {
        alert("해당 스케줄 알림 설정을 완료했습니다.");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert("해당 스케줄의 알림 설정에 실패하셨습니다.");
      } else if (response.status === 404) {
        console.log("해당 스케줄 없음");
        alert("해당 스케줄의 알림 설정에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("해당 스케줄의 알림 설정 중 오류가 발생했습니다.");
    }
  };

  return (
    <button onClick={scheduleAlarmOnEvent} className="w-[25px] mr-[20px]">
      <img src={alarmOn} alt="알람on" className="w-full" />
    </button>
  );
};

export default InterestScheduleAlarmOnBtn;
