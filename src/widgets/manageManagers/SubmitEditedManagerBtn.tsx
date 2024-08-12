import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import finish from "shared/imgs/finish.svg";
import { TManagerItem } from "types";

// 수정된 manager 닉네임 PUT api 연결
const SubmitEditedManagerBtn: React.FC<{ data: TManagerItem; newManager: string }> = (props) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const { managerIdx, interest } = props.data;
  const { newManager } = props;

  const changeManagerEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/managers/assignment`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          beforeManagerIdx: managerIdx,
          afterManagerIdx: newManager,
          afterInterestIdx: newManager,
        }),
      });

      if (response.ok) {
        alert(`${interest} 관리자를 수정 완료했습니다.`);
        navigate("/manageManagers");
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert(`${interest} - 관리자 수정에 실패했습니다.`);
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert(`${interest} - 관리자 수정에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`${interest} - 관리자 수정 중 오류가 발생했습니다.`);
    }
  };

  return (
    <button onClick={changeManagerEvent}>
      <img src={finish} alt="제출하기" />
    </button>
  );
};

export default SubmitEditedManagerBtn;
