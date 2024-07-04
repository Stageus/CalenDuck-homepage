import React from "react";

interface ScheduleNumTagItemProps {
  data: {
    subject: string;
    scheduleNum: number;
  };
}
const ScheduleNumTagItem: React.FC<ScheduleNumTagItemProps> = (props) => {
  const { subject, scheduleNum } = props.data;
  return (
    <div className="w-[70px] h-[27px] bg-tagColor m-[2px] px-[5px] flex justify-between items-center rounded-[20px]">
      <button title={subject} className="w-[45px] mr-[1px] text-[10px] truncate ... ">
        {subject}
      </button>

      <span className="flex justify-center w-[20px] text-[10px] ">
        {scheduleNum >= 5 ? "[5+]" : scheduleNum}
      </span>
    </div>
  );
};

export default ScheduleNumTagItem;
