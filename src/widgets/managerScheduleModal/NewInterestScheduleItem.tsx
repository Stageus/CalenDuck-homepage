import React from "react";

import finish from "shared/imgs/finish.svg";

// 관심사 스케줄 생성 POST api 연결 (/managers/schedules/interests)
const NewInterestScheduleItem = () => {
  const submitNewInterestSchedule = () => {};

  return (
    <article className="w-[655px] h-[15%] p-[20px] flex justify-between border-y border-black">
      <div className="w-[85%] flex items-center">
        <div>
          <input type="time" />
        </div>
        <input
          type="text"
          className="w-[350px] border border-alertColor outline-alertColor bg-transparent p-[10px] ml-[30px] items-center"
          maxLength={20}
          placeholder="새로운 스케줄 입력"
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

export default NewInterestScheduleItem;
