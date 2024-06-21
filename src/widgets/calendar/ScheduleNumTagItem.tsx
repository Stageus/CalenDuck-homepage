import React from "react";

const ScheduleNumTagItem = () => {
  const dummyData = {
    subject: "분데스리가",
    num: 123,
  };

  return (
    <div className="w-[72px] h-[27px] bg-tagColor px-[5px] flex justify-between items-center rounded-[20px]">
      <button title={dummyData.subject} className="w-[45px] mr-[1px] text-[10px] truncate ... ">
        {dummyData.subject}
      </button>

      <span className="flex justify-center w-[20px] text-[10px] ">
        {dummyData.num >= 5 ? "[5+]" : dummyData.num}
      </span>
    </div>
  );
};

export default ScheduleNumTagItem;
