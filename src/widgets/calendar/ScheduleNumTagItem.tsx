import React from "react";
import { TScheduleLabelItem } from "types";

const ScheduleNumTagItem: React.FC<{ data: TScheduleLabelItem }> = (props) => {
  const { type, name, count } = props.data;

  if (type !== "interest") {
    return null;
  }

  return (
    <div className="w-[70px] h-[27px] bg-tagColor m-[2px] px-[10px] flex justify-center rounded-[20px]">
      <div className="w-[60px] flex justify-between items-center">
        <div className="flex justify-start w-[40px] text-[10px] ">
          <div className="truncate ... ">{name}</div>
        </div>

        <span className="flex justify-center w-[20px] text-[10px] ">
          {count >= 5 ? "[5+]" : `[${count}]`}
        </span>
      </div>
    </div>
  );
};

export default ScheduleNumTagItem;
