import React from "react";

import removeInterest from "shared/imgs/removeInterest.svg";

interface MyInterestItemProps {
  data: {
    interest: string;
  };
}

// 내 관심사 삭제 DELETE api 연결 (/users/interests/:idx)
const MyInterestItem: React.FC<MyInterestItemProps> = (props) => {
  const { interest } = props.data;

  const clickRemoveInterest = () => {
    console.log("해당 관심사가 제거되었습니다.");
  };

  return (
    <div className="w-[100%] h-[42px] bg-lightgrayColor rounded-[5px] p-[10px] mb-[8px] flex justify-between items-center">
      <div>{interest}</div>
      <button onClick={clickRemoveInterest}>
        <img src={removeInterest} alt="관심사 제거" />
      </button>
    </div>
  );
};

export default MyInterestItem;
