import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import DeleteManagerBtn from "widgets/manageManagers/DeleteManagerBtn";
import SubmitEditedManagerBtn from "widgets/manageManagers/SubmitEditedManagerBtn";
import { TManagerItem } from "types";

const ManagerItem: React.FC<{ data: TManagerItem }> = (props) => {
  const { managerIdx, managerNickname, interestIdx, interest } = props.data;

  // 수정하기 버튼 클릭 시
  // 1. managerNickname input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const editManagerEvent = () => {
    setEditing(!editing);
  };
  const [newManager, setNewManager] = useState(managerNickname);

  return (
    <tr className="w-full px-[10%] my-[10px] flex items-center">
      <td className="w-[10%] px-[10px] py-4">
        <div className="flex justify-start">{managerNickname}</div>
      </td>
      <td className="w-[30%] px-[10px] py-4">
        {editing ? (
          <input
            type="text"
            className="w-full px-[10px] py-2 border border-alertColor outline-alertColor bg-transparent"
            ref={nicknameRef}
            defaultValue={managerNickname}
            maxLength={20}
            onChange={(e) => setNewManager(e.target.value)}
          />
        ) : (
          <div className="flex justify-start px-2">{managerNickname}</div>
        )}
      </td>

      <td className="w-[50%] px-[10px] py-4">
        <div className="flex justify-start px-2">{interest}</div>
      </td>

      <td className="w-[15%] flex justify-between px-[10px]">
        {editing ? (
          <SubmitEditedManagerBtn {...props} newManager={newManager} />
        ) : (
          <>
            <button onClick={editManagerEvent}>
              <img src={edit} alt="수정" />
            </button>
            <DeleteManagerBtn {...props.data} />
          </>
        )}
      </td>
    </tr>
  );
};

export default ManagerItem;
