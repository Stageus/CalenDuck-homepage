import React from "react";

interface ScheduleNumTagItemProps {
  data: {
    interest: string;
    scheduleNum: number;
  };
}
const ScheduleNumTagItem: React.FC<ScheduleNumTagItemProps> = (props) => {
  const { interest, scheduleNum } = props.data;
  return (
    <div className="w-[70px] h-[27px] bg-tagColor m-[2px] px-[10px] flex justify-center rounded-[20px]">
      <div className="w-[60px] flex flex justify-between items-center">
        <div className="flex justify-start w-[40px] text-[10px] ">
          <div className="truncate ... ">{interest}</div>
        </div>

        <span className="flex justify-center w-[20px] text-[10px] ">
          {scheduleNum >= 5 ? "[5+]" : `[${scheduleNum}]`}
        </span>
      </div>
    </div>
  );
};

export default ScheduleNumTagItem;
