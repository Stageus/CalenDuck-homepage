import React from "react";

import finish from "shared/imgs/finish.svg";

// 관심사 스케줄 수정 PUT api 연결 (/managers/schedules/:idx)
const EditInterestScheduleItem = () => {
  const editTitleEvent = () => {};
  return (
    <button onClick={editTitleEvent}>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default EditInterestScheduleItem;
