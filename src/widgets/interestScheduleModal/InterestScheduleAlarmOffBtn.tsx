import React from "react";
import { useCookies } from "react-cookie";

import alarmOff from "shared/imgs/alarmOff.svg";

// 스케줄 알림 삭제 DELETE api (/schedules/interest/:idx/notify)
const InterestScheduleAlarmOffBtn: React.FC<{ idx?: number }> = ({ idx }) => {
  const [cookies] = useCookies(["token"]);

  const scheduleAlarmOffEvent = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/schedules/interest/${idx}/notify`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.ok) {
        alert(`해당 스케줄 알림을 해제했습니다.`);
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert(`해당 스케줄 알림을 해제했습니다.`);
      } else if (response.status === 404) {
        console.log("해당 스케줄 없음");
        alert(`해당 스케줄 알림을 해제했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`해당 스케줄 알림 해제 중 오류가 발생했습니다.`);
    }
  };

  return (
    <button onClick={scheduleAlarmOffEvent} className="w-[25px] mr-[20px]">
      <img src={alarmOff} alt="알람off" className="w-full" />
    </button>
  );
};

export default InterestScheduleAlarmOffBtn;
