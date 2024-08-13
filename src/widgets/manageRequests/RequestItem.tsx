import React, { useState } from "react";

import arrowDropDown from "shared/imgs/arrowDropDown.svg";
import arrowDropUp from "shared/imgs/arrowDropUp.svg";
import { TRequestItem } from "types";
import ReplyRequestItem from "widgets/manageRequests/ReplyRequestItem";

// master가 받은 문의(관심사 추가 문의, 기타 문의)
const RequestItem: React.FC<{ data: TRequestItem }> = (props) => {
  const { askIdx, nickname, title, contents, reply, createdAt } = props.data;

  const alarmSymbol = reply ? "✅" : "❌";
  const metaData = `${nickname} - ${createdAt}`;

  const [openDetail, setOpenDetail] = useState<boolean>(true);
  const clickSeeDetailEvent = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <tr className="w-full bg-white px-[10%] my-[10px] flex items-center">
      <td className="w-[5%] text-center">{askIdx}</td>
      <td className="w-[95%]">
        <article className="w-full h-fit bg-tagColor rounded-[5px] p-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mx-[10px]">{alarmSymbol}</span>
              <div className="ml-[10px] flex flex-col">
                <div className="text-sm text-grayColor">{metaData}</div>
                <div className="text-lg">"{title}"</div>
              </div>
            </div>

            <button onClick={clickSeeDetailEvent} className="w-[20px] h-[20px]">
              <img
                src={openDetail ? arrowDropDown : arrowDropUp}
                alt="자세히보기"
                className="w-full"
              />
            </button>
          </div>

          {!openDetail && (
            <div className="flex flex-col mx-[50px] mt-[30px] mb-[20px]">
              <span className="font-bold">문의 내용</span>
              <p>{contents}</p>
            </div>
          )}

          {reply && !openDetail && (
            <div className="flex flex-col mx-[50px] mt-[30px] mb-[20px]">
              <span className="font-bold">답변</span>
              <p>{reply}</p>
            </div>
          )}
          {!reply && !openDetail && <ReplyRequestItem {...props.data} />}
        </article>
      </td>
    </tr>
  );
};

export default RequestItem;
