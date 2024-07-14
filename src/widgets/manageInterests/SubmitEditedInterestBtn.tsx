import React from "react";

import finish from "shared/imgs/finish.svg";

// 관심사 수정 PUT api 연결 (/master/interests/:idx)
const SubmitEditedInterestBtn = () => {
  return (
    <button>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default SubmitEditedInterestBtn;
