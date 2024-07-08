import React from "react";

import alarmOff from "shared/imgs/alarmOff.svg";

const ScheduleAlarmOffBtn = () => {
  return (
    <button className="w-[25px] mr-[20px]">
      <img src={alarmOff} alt="알람off" className="w-[100%]" />
    </button>
  );
};

export default ScheduleAlarmOffBtn;
