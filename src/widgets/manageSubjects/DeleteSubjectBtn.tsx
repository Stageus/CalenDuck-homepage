import React from "react";

import remove from "shared/imgs/remove.svg";

// 관심사 삭제 DELETE api (/master/subjects/:idx)
const DeleteSubjectBtn = () => {
  return (
    <button>
      <img src={remove} alt="삭제" />
    </button>
  );
};

export default DeleteSubjectBtn;
