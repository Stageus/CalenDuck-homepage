import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import remove from "shared/imgs/remove.svg";
import { TInterestItem } from "types";

// 관심사 삭제 DELETE api (/master/interests/:idx)
const DeleteInterestBtn: React.FC<TInterestItem> = (props) => {
  const { interestIdx, interestName } = props;
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const deleteInterestEvent = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/master/interests/${interestIdx}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.ok) {
        alert(`${interestName}를 관심사에서 삭제했습니다.`);
        navigate("/manageInterests");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert(`${interestName} 삭제에 실패했습니다.`);
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert(`${interestName} 삭제에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`${interestName} 삭제 중 오류가 발생했습니다.`);
    }
  };

  return (
    <button onClick={deleteInterestEvent}>
      <img src={remove} alt="삭제" />
    </button>
  );
};

export default DeleteInterestBtn;
