import React, { useState } from "react";

import arrowDropDown from "shared/imgs/arrowDropDown.svg";
import arrowDropUp from "shared/imgs/arrowDropUp.svg";

interface AlarmItemProps {
  data: {
    type: number;
    date: string;
    interestName?: string;
    title: string;
    reply?: string;
  };
}

const AlarmItem: React.FC<AlarmItemProps> = (props) => {
  const { type, date, interestName, title, reply } = props.data;

  let alarmSymbol, typeInterest, content;
  if (type === 1) {
    alarmSymbol = "🌟";
    typeInterest = "24시간 전";
    content = `[ ${interestName}: ${title} ] (이)가 하루 전으로 다가왔어요!`;
  } else if (type === 2) {
    alarmSymbol = "💌";
    typeInterest = "마스터 답변";
    content = `${title}에 대한 관리자 답변이 도착했습니다.`;
  } else if (type === 3) {
    alarmSymbol = "👑";
    typeInterest = "관리자 지정";
    content = `${title}에 대한 관리자로 지정되었습니다. 축하드립니다!`;
  }

  // 드롭다운 버튼 클릭시 자세히 보기 열림
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const clickSeeDetailEvent = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <article
      className={`w-[100%] ${
        openDetail ? "h-[fit-content]" : "h-[70px]"
      } bg-tagColor rounded-[5px] p-[10px] m-[5px]`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mx-[10px]">{alarmSymbol}</span>
          <div className="w-[600px] ml-[10px] flex flex-col justify-start">
            <div className="text-sm text-grayColor">
              {typeInterest} - {date}
            </div>
            <div className="text-lg">{content}</div>
          </div>
        </div>

        {type === 2 && (
          <button onClick={clickSeeDetailEvent}>
            <img src={openDetail ? arrowDropUp : arrowDropDown} alt="자세히보기" />
          </button>
        )}
      </div>
      {type === 2 && openDetail && <div className="mx-[50px] mt-[30px] mb-[20px]">{reply}</div>}
    </article>
  );
};

export default AlarmItem;
