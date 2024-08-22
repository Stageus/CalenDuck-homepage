import React, { useState, useRef } from "react";
import { TInterestItem } from "types";
import edit from "shared/imgs/edit.svg";
import DeleteInterestBtn from "widgets/manageInterests/DeleteInterestBtn";
import { useCookies } from "react-cookie";

// 관심사 목록 불러오기 GET api 연결 (/interests)
// 관심사 수정하기 PUT api 연결 (/master/interests/:idx)
const InterestItem: React.FC<{ data: TInterestItem }> = (props) => {
  const { interestIdx, interestName } = props.data;
  const [cookies] = useCookies(["token"]);

  // 수정하기 버튼 클릭 시
  // 1. interest input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const interestRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);

  const editInterestEvent = () => {
    setEditing(!editing);
  };

  // 수정 완료 버튼 클릭 시
  const submitEditInterest = async () => {
    const newInterestName = interestRef.current?.value;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/master/interests/${interestIdx}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
          body: JSON.stringify({
            interestName: newInterestName,
          }),
        }
      );

      if (response.ok) {
        alert("관심사 수정을 완료했습니다.");
        setEditing(false);
      } else if (response.status === 400) {
        console.log("정규식 위반");
        alert("글자수 제한에 유의해주세요.");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert("관심사 수정에 실패했습니다.");
      } else if (response.status === 404) {
        console.log("해당 관심사가 없음");
        alert("관심사 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("관심사 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <tr className="w-full">
      <td className="w-[10%] px-[10px] py-4">{interestIdx}</td>

      <td className="w-[50%] px-[10px] py-4">
        {editing ? (
          <input
            type="text"
            className="w-full px-[10px] py-4 border border-alertColor outline-alertColor bg-transparent"
            ref={interestRef}
            defaultValue={interestName}
            maxLength={20}
          />
        ) : (
          <div className="flex justify-start px-2">{interestName}</div>
        )}
      </td>

      {editing ? (
        <td className="w-[15%] flex justify-center px-[10px]">
          <button onClick={submitEditInterest}>완료</button>
        </td>
      ) : (
        <td className="w-[15%] flex justify-between px-[10px]">
          <button onClick={editInterestEvent}>
            <img src={edit} alt="수정" />
          </button>
          <DeleteInterestBtn {...props.data} />
        </td>
      )}
    </tr>
  );
};

export default InterestItem;
