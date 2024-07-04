import React from "react";

import finish from "shared/imgs/finish.svg";

// 수정된 관심사 PUT api 연결
const SubmitNewSubjectBtn = () => {
  return (
    <button>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default SubmitNewSubjectBtn;
