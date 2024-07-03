import React from "react";

import alarmOn from "shared/imgs/alarmOn.svg";

const ScheduleAlarmOnBtn = () => {
  return (
    <button className="w-[25px] mr-[20px]">
      <img src={alarmOn} alt="알람on" className="w-[100%]" />
    </button>
  );
};

export default ScheduleAlarmOnBtn;
