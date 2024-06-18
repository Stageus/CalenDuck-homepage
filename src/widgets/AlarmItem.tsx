import React, { useState } from "react";

import arrowDropDown from "shared/imgs/arrowDropDown.svg";
import arrowDropUp from "shared/imgs/arrowDropUp.svg";

const dummyData = {
  id: "alarm_1",
  date: "2024/06/18",
  type: 1,
  category: "프리미어리그",
  title: "토트넘 vs 울버햄튼",
  reply:
    "정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~",
};

const AlarmItem = () => {
  let alarmSymbol, typeCategory, content;
  if (dummyData.type === 1) {
    alarmSymbol = "🌟";
    typeCategory = "24시간 전";
    content = `[ ${dummyData.category}: ${dummyData.title} ] (이)가 하루 전으로 다가왔어요!`;
  } else if (dummyData.type === 2) {
    alarmSymbol = "💌";
    typeCategory = "마스터 답변";
    content = `${dummyData.title}에 대한 관리자 답변이 도착했습니다.`;
  } else if (dummyData.type === 3) {
    alarmSymbol = "👑";
    typeCategory = "관리자 지정";
    content = `${dummyData.title}에 대한 관리자로 지정되었습니다. 축하드립니다!`;
  }

  // 드롭다운 버튼 클릭시 자세히 보기 열림
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const clickSeeDetailEvent = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <article
      className={`w-[831px] ${
        openDetail ? "h-[70px]" : "h-[fit-content]]"
      } bg-tagColor rounded-[5px] p-[10px]`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mx-[10px]">{alarmSymbol}</span>
          <div className="w-[600px] ml-[10px] flex flex-col justify-start">
            <div className="text-sm text-grayColor">
              {typeCategory} - {dummyData.date}
            </div>
            <div className="text-lg">{content}</div>
          </div>
        </div>

        {openDetail ? (
          <button onClick={clickSeeDetailEvent}>
            <img src={arrowDropDown} alt="자세히보기" />
          </button>
        ) : (
          <button onClick={clickSeeDetailEvent}>
            <img src={arrowDropUp} alt="자세히보기" />
          </button>
        )}
      </div>
      {!openDetail && <div className="mx-[50px] mt-[30px] mb-[20px]">{dummyData.reply}</div>}
    </article>
  );
};

export default AlarmItem;
