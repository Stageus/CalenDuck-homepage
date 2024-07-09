import React from "react";

import remove from "shared/imgs/remove.svg";

// 관심사 계정 권한 삭제 DELETE api 연결 (/master/managers/:idx/permission)
const DeleteManagerBtn = () => {
  return (
    <button>
      <img src={remove} alt="삭제" />
    </button>
  );
};

export default DeleteManagerBtn;
