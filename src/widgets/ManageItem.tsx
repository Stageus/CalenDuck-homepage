import React from "react";

import edit from "shared/imgs/edit.svg";
import remove from "shared/imgs/remove.svg";

interface ManageItemProps {
  data: {
    id: number;
    managerNickname?: string;
    subject: string;
  };
}

const ManageItem: React.FC<ManageItemProps> = (props) => {
  const { id, managerNickname, subject } = props.data;

  return (
    <tr className="w-[100%] px-[10%] flex justify-between my-[10px] border border-green-500">
      <div className="flex w-[80%]">
        <th className="w-[10%] px-[10px] py-4 border border-blue-500">
          <div className="flex justify-start">{id}</div>
        </th>
        {managerNickname && (
          <th className="w-[30%] px-[10px] py-4 border border-blue-500">
            <div className="flex justify-start px-2">{managerNickname}</div>
          </th>
        )}

        <th className="w-[50%] px-[10px] py-4 border border-blue-500">
          <div className="flex justify-start px-2">{subject}</div>
        </th>
      </div>

      <th className="w-[15%] border border-blue-500 flex justify-between px-[10px]">
        <button>
          <img src={edit} alt="수정" />
        </button>
        <button>
          <img src={remove} alt="삭제" />
        </button>
      </th>
    </tr>
  );
};

export default ManageItem;
