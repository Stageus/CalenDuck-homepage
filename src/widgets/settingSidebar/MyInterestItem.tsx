import React from "react";
import { useCookies } from "react-cookie";

import removeInterest from "shared/imgs/removeInterest.svg";
import { TInterestItem } from "types";

interface MyInterestItemProps {
  data: TInterestItem;
  onRemove: (interestIdx: number) => void;
}

// 내 관심사 삭제 DELETE api 연결 (/interests/:idx)
const MyInterestItem: React.FC<MyInterestItemProps> = ({ data, onRemove }) => {
  const { interestIdx, interestName } = data;
  const [cookies] = useCookies(["token"]);

  const removeInterestEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/interests/${interestIdx}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (response.ok) {
        alert("해당 관심사가 제거되었습니다.");
        onRemove(interestIdx);
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert("관심사 제거 중 오류가 발생하였습니다. 나중에 다시 시도해주세요.");
      } else if (response.status === 404) {
        console.log("해당 관심사 없음");
        alert("관심사 제거 중 오류가 발생하였습니다. 나중에 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("서버 에러: ", error);
    }
  };

  return (
    <div className="w-full h-[42px] bg-lightgrayColor rounded-[5px] p-[10px] mb-[8px] flex justify-between items-center">
      <div>{interestName}</div>
      <button onClick={removeInterestEvent}>
        <img src={removeInterest} alt="관심사 제거" />
      </button>
    </div>
  );
};

export default MyInterestItem;
