import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import DeleteSubjectBtn from "widgets/manageSubjects/DeleteSubjectBtn";
import SubmitEditedSubjectBtn from "widgets/manageSubjects/SubmitEditedSubjectBtn";

interface ManageItemProps {
  data: {
    id: number;
    subject: string;
  };
}

// 관심사 목록 불러오기 GET api 연결 (/subjects)
const SubjectItem: React.FC<ManageItemProps> = (props) => {
  const { id, subject } = props.data;

  // 수정하기 버튼 클릭 시
  // 1. subject input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const subjectRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const editSubjectEvent = () => {
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
            ref={subjectRef}
            defaultValue={subject}
            maxLength={20}
          />
        ) : (
          <th className="w-[50%] px-[10px] py-4">
            <div className="flex justify-start px-2">{subject}</div>
          </th>
        )}
      </div>

      {editing ? (
        <th className="w-[15%] flex justify-center px-[10px]">
          <SubmitEditedSubjectBtn />
        </th>
      ) : (
        <th className="w-[15%] flex justify-between px-[10px]">
          <button onClick={editSubjectEvent}>
            <img src={edit} alt="수정" />
          </button>
          <DeleteSubjectBtn />
        </th>
      )}
    </tr>
  );
};

export default SubjectItem;
