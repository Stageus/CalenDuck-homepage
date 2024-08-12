import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 관심사 계정 권한 부여 POST api 연결 (/master/users/permission)
const NewManagerItem = () => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [newManagerIdx, setNewManagerIdx] = useState<number>();

  const addNewManagerEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/users/permission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          userIdx: newManagerIdx,
          interestIdx: 1,
        }),
      });

      if (response.ok) {
        alert("새로운 관리자가 추가되었습니다.");
        navigate("/managerInterests");
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 404) {
        console.log("존재하지 않는 아이디 추가");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 409) {
        alert("다른 관심사를 관리 중인 사용자입니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("관리자 추가 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="w-full bg-tagColor">
          <tr className="w-full px-[10%] my-[10px]">
            <th className="w-[10%] px-[10px] py-4">NEW</th>
            <td className="w-[30%] px-[10px] py-4">
              <input placeholder="닉네임 입력" className="w-full px-[10px] py-2" />
            </td>
            <td className="w-[50%] px-[10px] py-4">
              <input placeholder="관심사 입력" className="w-full px-[10px] py-2" />
            </td>
            <th className="w-[15%] px-[10px] py-4">
              {/* <button>
                <img src={minus} alt="minus" />
              </button> */}
              <button onClick={addNewManagerEvent}>
                <img src={plus} alt="plus" />
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default NewManagerItem;
