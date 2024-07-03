import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import RequestItem from "widgets/RequestItem";

// 기타 문의 관리 페이지
const ManageEtcRequestPage = () => {
  const location = useLocation();

  const dummyData = [
    {
      id: 1,
      nickname: "민석최",
      date: "2024/03/31",
      title: "기타 문의 제목 1",
      content:
        "오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ",
      reply:
        "안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧ㄴ안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧",
    },
    {
      id: 2,
      nickname: "소미유",
      date: "2024/03/31",
      title: "기타 문의 제목 2",
      content:
        "조성진 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ",
    },
    {
      id: 3,
      nickname: "윤서박",
      date: "2024/03/31",
      title: "기타 문의 제목 3",
      content:
        "미식축구 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ",
      reply:
        "안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧ㄴ안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧",
    },
    {
      id: 4,
      nickname: "수인리",
      date: "2024/03/31",
      title: "기타 문의 제목 4",
      content:
        "피파 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ",
    },
    {
      id: 5,
      nickname: "경은조",
      date: "2024/03/31",
      title: "기타 문의 제목 5",
      content:
        "뮤지컬 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ오버워치 넣어줘넣어줘넣어줘어어ㅓ어어어어어어ㅓㅓ엉어ㅓㅁ",
      reply:
        "안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧ㄴ안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧안돼요안돼용앙돼안돼안돼어ㅏ어ㅏㅇ너라앧",
    },
  ];

  return (
    <section>
      <HeaderItem />

      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>

      <article className="mt-[70px] flex flex-col items-center justify-start">
        {dummyData.map((elem) => {
          return <RequestItem key={elem.id} data={elem} />;
        })}
      </article>
    </section>
  );
};

export default ManageEtcRequestPage;
