import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import remove from "shared/imgs/remove.svg";
import { TManagerItem } from "types";

// 관심사 계정 권한 삭제 DELETE api 연결 (/master/managers/:idx/permission)
const DeleteManagerBtn: React.FC<TManagerItem> = (props) => {
  const { managerIdx, managerNickname } = props;
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const deleteManagerEvent = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/master/managers/${managerIdx}/permission`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.ok) {
        alert(`${managerNickname}를 관리자에서 삭제했습니다.`);
        navigate("/manageManagers");
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert(`${managerNickname} - 해당 관리자 삭제에 실패했습니다.`);
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert(`${managerNickname} - 해당 관리자 삭제에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`${managerNickname} - 해당 관리자 삭제 중 오류가 발생했습니다.`);
    }
  };

  return (
    <button onClick={deleteManagerEvent}>
      <img src={remove} alt="삭제" />
    </button>
  );
};

export default DeleteManagerBtn;
