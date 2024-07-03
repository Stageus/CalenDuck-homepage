import React, { useState } from "react";

import arrowDropDown from "shared/imgs/arrowDropDown.svg";
import arrowDropUp from "shared/imgs/arrowDropUp.svg";

interface AlarmItemProps {
  data: {
    nickname?: string;
    date: string;
    subject?: string;
    title: string;
    content: string;
    reply?: string;
  };
}

// master가 받은 문의(관심사 추가 문의, 기타 문의)
const RequestItem: React.FC<AlarmItemProps> = (props) => {
  const { nickname, date, title, content, reply } = props.data;

  let alarmSymbol, metaData;
  alarmSymbol = reply ? "👍" : "👎";
  metaData = `${nickname} - ${date}`;

  // 드롭다운 버튼 클릭시 자세히 보기 열림
  const [openDetail, setOpenDetail] = useState<boolean>(true);
  const clickSeeDetailEvent = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <article
      className={`w-[70%] ${
        openDetail ? "h-[70px]" : "h-[fit-content]]"
      } bg-tagColor rounded-[5px] p-[10px] m-[20px]`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mx-[10px]">{alarmSymbol}</span>
          <div className="w-[600px] ml-[10px] flex flex-col justify-start">
            <div className="text-sm text-grayColor">{metaData}</div>
            <div className="text-lg">"{title}"</div>
          </div>
        </div>

        <button onClick={clickSeeDetailEvent}>
          <img src={openDetail ? arrowDropDown : arrowDropUp} alt="자세히보기" />
        </button>
      </div>

      {!openDetail && (
        <div className="flex flex-col mx-[50px] mt-[30px] mb-[20px]">
          <span className="font-bold">문의내용</span>
          {content}
        </div>
      )}

      {reply && !openDetail && (
        <div className="flex flex-col mx-[50px] mt-[30px] mb-[20px]">
          <span className="font-bold">답변</span>
          {reply}
        </div>
      )}
      {!reply && !openDetail ? (
        <div className="mx-[50px] mt-[30px] mb-[20px] flex flex-col items-end">
          <textarea
            className="w-[100%] p-[10px] mb-[10px] outline-keyColor"
            placeholder="( 답변 입력 )"
          />
          <button className="bg-subColor text-sm w-[80px] py-[3px] rounded-[5px]">전송</button>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default RequestItem;
