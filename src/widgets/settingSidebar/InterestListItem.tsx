import React from "react";
import { TInterestItem } from "types";
import plus from "shared/imgs/plus.svg";
import { useCookies } from "react-cookie";

interface InterestListItemProps {
  data: TInterestItem;
}

// 관심사 추가 POST api (/interests/:idx)
const InterestListItem: React.FC<InterestListItemProps> = (props) => {
  const { interestIdx, interestName } = props.data;
  const [cookies] = useCookies(["token"]);

  const addInterestEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/interests/${interestIdx}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (response.ok) {
        alert("관심사가 정상적으로 추가되었습니다.");
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert("관심사 추가에 실패하셨습니다.");
      } else if (response.status === 404) {
        console.log("잘못된 인증 정보 제공");
        alert("관심사 추가에 실패하셨습니다.");
      } else if (response.status === 409) {
        console.log("계정이 하나의 관심사를 여러 번 추가할 때");
        alert("관심사 추가에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("관심사 추가 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="h-10 border px-3 flex justify-between items-center">
      <div className="">{interestName}</div>
      <button onClick={addInterestEvent}>
        <img src={plus} />
      </button>
    </div>
  );
};

export default InterestListItem;
