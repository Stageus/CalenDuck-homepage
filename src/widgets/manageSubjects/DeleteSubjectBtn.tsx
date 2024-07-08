import React from "react";

import remove from "shared/imgs/remove.svg";

const DeleteSubjectBtn = () => {
  return (
    <button>
      <img src={remove} alt="삭제" />
    </button>
  );
};

export default DeleteSubjectBtn;
