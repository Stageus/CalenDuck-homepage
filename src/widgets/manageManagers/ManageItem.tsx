import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import DeleteManagerBtn from "widgets/manageManagers/DeleteManagerBtn";
import SubmitNewManagerBtn from "widgets/manageManagers/SubmitNewManagerBtn";

interface ManageItemProps {
  data: {
    id: number;
    managerNickname?: string;
    subject: string;
  };
}

const ManageItem: React.FC<ManageItemProps> = (props) => {
  const { id, managerNickname, subject } = props.data;

  // 수정하기 버튼 클릭 시
  // 1. managerNickname input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const editManagerEvent = () => {
    setEditing(!editing);
  };

  return (
    <tr className="w-[100%] px-[10%] my-[10px] flex justify-between">
      <div className="flex w-[80%]">
        <th className="w-[10%] px-[10px] py-4">
          <div className="flex justify-start">{id}</div>
        </th>
        {editing ? (
          <input
            type="text"
            className="w-[25%] px-[10px] py-4 mx-[10px] border border-alertColor outline-alertColor bg-transparent"
            ref={nicknameRef}
            defaultValue={managerNickname}
            maxLength={20}
          />
        ) : (
          <th className="w-[30%] px-[10px] py-4">
            <div className="flex justify-start px-2">{managerNickname}</div>
          </th>
        )}

        <th className="w-[50%] px-[10px] py-4">
          <div className="flex justify-start px-2">{subject}</div>
        </th>
      </div>

      {editing ? (
        <th className="w-[15%] flex justify-center px-[10px]">
          <SubmitNewManagerBtn />
        </th>
      ) : (
        <th className="w-[15%] flex justify-between px-[10px]">
          <button onClick={editManagerEvent}>
            <img src={edit} alt="수정" />
          </button>
          <DeleteManagerBtn />
        </th>
      )}
    </tr>
  );
};

export default ManageItem;
