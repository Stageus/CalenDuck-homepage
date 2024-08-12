import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import DeleteManagerBtn from "widgets/manageManagers/DeleteManagerBtn";
import SubmitEditedManagerBtn from "widgets/manageManagers/SubmitEditedManagerBtn";

interface ManageItemProps {
  data: {
    id: number;
    managerNickname: string;
    interest: string;
  };
}

const ManagerItem: React.FC<ManageItemProps> = (props) => {
  const { id, managerNickname, interest } = props.data;

  // 수정하기 버튼 클릭 시
  // 1. managerNickname input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const editManagerEvent = () => {
    setEditing(!editing);
  };

  return (
    <tr className="w-full px-[10%] my-[10px] flex">
      <td className="w-[10%] px-[10px] py-4">
        <div className="flex justify-start">{id}</div>
      </td>
      <td className="w-[30%] px-[10px] py-4">
        {editing ? (
          <input
            type="text"
            className="w-full px-[10px] py-4 border border-alertColor outline-alertColor bg-transparent"
            ref={nicknameRef}
            defaultValue={managerNickname}
            maxLength={20}
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
          <SubmitEditedManagerBtn />
        ) : (
          <>
            <button onClick={editManagerEvent}>
              <img src={edit} alt="수정" />
            </button>
            <DeleteManagerBtn />
          </>
        )}
      </td>
    </tr>
  );
};

export default ManagerItem;
