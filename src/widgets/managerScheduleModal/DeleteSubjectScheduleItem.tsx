import React from "react";

import remove from "shared/imgs/remove.svg";

// 관심사 스케줄 삭제 DELETE api 연결 (/managers/schedules/subjects/:idx)
const DeleteSubjectScheduleItem = () => {
  return (
    <button>
      <img src={remove} alt="삭제하기" />
    </button>
  );
};

export default DeleteSubjectScheduleItem;
