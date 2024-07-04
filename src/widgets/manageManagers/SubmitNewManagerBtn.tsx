import React from "react";

import finish from "shared/imgs/finish.svg";

// 수정된 manager 닉네임 PUT api 연결
const SubmitNewManagerBtn = () => {
  return (
    <button>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default SubmitNewManagerBtn;
