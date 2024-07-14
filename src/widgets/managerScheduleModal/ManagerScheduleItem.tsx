import React, { useState, useRef } from "react";

import edit from "shared/imgs/edit.svg";
import EditInterestScheduleItem from "widgets/managerScheduleModal/EditInterestScheduleItem";
import DeleteInterestScheduleItem from "widgets/managerScheduleModal/DeleteInterestScheduleItem";

interface ManagerScheduleItemProps {
  data: {
    interest: string;
    time: string;
    title: string;
  };
}

const ManagerScheduleItem: React.FC<ManagerScheduleItemProps> = (props) => {
  const { time, title } = props.data;

  // 수정 중인 타이틀 반영
  const titleRef = useRef<HTMLInputElement>(null);

  // 수정하기 버튼 클릭 시
  // 1. title input이 editable하게 됨
  // 2. 기존 수정&삭제 버튼이 완료 버튼으로 변경됨
  const [editing, setEditing] = useState<boolean>(false);
  const editTitleEvent = () => {
    setEditing(!editing);
    if (!editing && titleRef.current) {
      titleRef.current.value = title;
    }
  };

  return (
    <article
      className={`${
        editing ? "bg-tagColor" : "bg-lightgrayColor"
      } w-[638px] h-[70px] rounded-[5px] flex justify-between items-center p-[20px] m-[5px]`}
    >
      <div className="w-[80%] flex items-center">
        <div className="w-[15%]">{time}</div>
        {editing ? (
          <input
            type="text"
            className="w-[350px] outline-alertColor	bg-transparent p-[10px] items-center"
            ref={titleRef}
            defaultValue={title}
            maxLength={20}
          />
        ) : (
          <div className="w-[350px] h-[40px] flex items-center">{title}</div>
        )}
      </div>

      <div className={`w-[13%] flex ${editing ? "justify-center" : "justify-between"}`}>
        {editing ? (
          // 수정하기
          <EditInterestScheduleItem />
        ) : (
          <>
            <button onClick={editTitleEvent}>
              <img src={edit} alt="수정하기" />
            </button>
            {/* 삭제하기 */}
            <DeleteInterestScheduleItem />
          </>
        )}
      </div>
    </article>
  );
};

export default ManagerScheduleItem;
