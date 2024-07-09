import React from "react";

import finish from "shared/imgs/finish.svg";

// 관심사 수정 PUT api 연결 (/master/subjects/:idx)
const SubmitEditedSubjectBtn = () => {
  return (
    <button>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default SubmitEditedSubjectBtn;
