import React from "react";
import { useCookies } from "react-cookie";
import remove from "shared/imgs/remove.svg";
import { TScheduleItem } from "types";

// 스케줄 삭제 DELETE api (/schedules/:idx)
const DeletePersonalScheduleItem: React.FC<TScheduleItem> = (props) => {
  const { idx } = props;
  const [cookies] = useCookies(["token"]);

  const deleteScheduleEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/schedules/${idx}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (response.ok) {
        alert(`해당 스케줄을 삭제했습니다.`);
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert(`스케줄 삭제에 실패했습니다.`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`스케줄 삭제 중 오류가 발생했습니다.`);
    }
  };
  return (
    <button onClick={deleteScheduleEvent}>
      <img src={remove} alt="삭제하기" />
    </button>
  );
};

export default DeletePersonalScheduleItem;
