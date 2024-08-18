import React from "react";
import { useCookies } from "react-cookie";

import remove from "shared/imgs/remove.svg";
import { TScheduleItem } from "types";

// 관심사 스케줄 삭제 DELETE api 연결 (/managers/schedules/interests/:idx)
const DeleteInterestScheduleItem: React.FC<TScheduleItem> = (props) => {
  const { idx } = props;
  const [cookies] = useCookies(["token"]);

  const deleteManagingScheduleEvent = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/managers/schedules/interests/${idx}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.ok) {
        alert(`해당 스케줄을 성공적으로 삭제하였습니다.`);
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
      } else if (response.status === 404) {
        console.log("해당 스케줄 없음");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`스케줄 삭제 중 오류가 발생했습니다.`);
    }
  };

  return (
    <button onClick={deleteManagingScheduleEvent}>
      <img src={remove} alt="삭제하기" />
    </button>
  );
};

export default DeleteInterestScheduleItem;
