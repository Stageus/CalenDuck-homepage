import React from "react";

import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import AlarmItem from "widgets/AlarmItem";

const AlarmPage = () => {
  const dummyData = [
    {
      id: "alarm_1",
      date: "2024/06/18",
      type: 1,
      subject: "프리미어리그",
      title: "토트넘 vs 울버햄튼",
    },
    {
      id: "alarm_2",
      date: "2024/06/18",
      type: 2,
      title: "알림이 제대로 오지 않았습니다.",
      reply:
        "정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~",
    },
    {
      id: "alarm_3",
      date: "2024/06/18",
      type: 3,
      title: "미식축구",
    },
  ];

  return (
    <>
      <HeaderSidebarContainer />
      <div className="w-[100%] h-[50px] flex items-center font-bold text-xl mb-5 fixed top-[50px] bg-white">
        [ 알림함 ]
      </div>

      <section className="mt-[120px]">
        <h2 className="font-bold text-l mt-7 mb-2">오늘 받은 알림</h2>
        <article className="flex flex-col items-center justify-start">
          {dummyData.map((elem) => {
            return <AlarmItem key={elem.id} data={elem} />;
          })}
        </article>

        <div className="flex items-end mt-7 mb-2">
          <h2 className="font-bold text-l mr-5">이전 알림</h2>
          <span className="text-xs text-alertColor">30일 후 자동 삭제 됩니다</span>
        </div>
        <article className="flex flex-col items-center justify-start">
          {dummyData.map((elem) => {
            return <AlarmItem key={elem.id} data={elem} />;
          })}
        </article>
      </section>
    </>
  );
};
export default AlarmPage;
