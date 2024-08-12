import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 새로운 관심사를 추가하기 POST api 연결 (/master/interests)
const NewInterestItem = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [newInterestName, setNewInterestName] = useState("");

  const addNewInterestEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/interests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          interestName: newInterestName,
        }),
      });

      if (response.ok) {
        alert("새로운 관심사가 추가되었습니다.");
        navigate("/managerInterests");
      } else if (response.status === 400) {
        console.log("정규식 위반");
        alert("관심사 추가에 실패하셨습니다.");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert("관심사 추가에 실패하셨습니다.");
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert("관심사 추가에 실패하셨습니다.");
      } else if (response.status === 409) {
        alert("이미 존재하는 관심사입니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("관심사 추가 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="bg-tagColor">
          <tr className="w-full flex justify-between">
            <th className="w-[10%] px-[10px] py-4 flex justify-center items-center">NEW</th>
            <td className="w-[50%] px-[10px] py-4">
              <input
                placeholder="관심사 입력"
                className="w-full px-[10px] py-2  rounded"
                type="text"
                onChange={(e) => setNewInterestName(e.target.value)}
              />
            </td>
            <td className="w-[15%] flex justify-center items-center py-4">
              {/* <button>
                <img src={minus} alt="minus" />
              </button> */}
              <button onClick={addNewInterestEvent}>
                <img src={plus} alt="plus" />
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default NewInterestItem;
