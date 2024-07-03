import React from "react";

import removeSubject from "shared/imgs/removeSubject.svg";

interface MySubjectItemProps {
  data: {
    subject: string;
  };
}

const MySubjectItem: React.FC<MySubjectItemProps> = (props) => {
  const { subject } = props.data;

  // 내 관심사 목록에서 해당 관심사 제거
  const clickRemoveSubject = () => {
    console.log("해당 관심사가 제거되었습니다.");
  };

  return (
    <div className="w-[100%] h-[42px] bg-lightgrayColor rounded-[5px] p-[10px] mb-[8px] flex justify-between items-center">
      <div>{subject}</div>
      <button onClick={clickRemoveSubject}>
        <img src={removeSubject} alt="관심사 제거" />
      </button>
    </div>
  );
};

export default MySubjectItem;
