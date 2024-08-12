import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import { TInterestItem } from "types";
import DeleteInterestBtn from "widgets/manageInterests/DeleteInterestBtn";
import SubmitEditedInterestBtn from "widgets/manageInterests/SubmitEditedInterestBtn";

// 관심사 목록 불러오기 GET api 연결 (/interests)
const InterestItem: React.FC<{ data: TInterestItem }> = (props) => {
  const { interestIdx, interestName } = props.data;

  // 수정하기 버튼 클릭 시
  // 1. interest input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const interestRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const editInterestEvent = () => {
    setEditing(!editing);
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
          <SubmitEditedInterestBtn />
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
