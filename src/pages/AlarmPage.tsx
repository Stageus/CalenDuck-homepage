import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import AlarmItem from "widgets/AlarmItem";

// 알림 데이터 타입 정의
interface NotifData {
  id: string;
  date: string;
  type: number;
  interestName?: string;
  title: string;
  content: string;
  reply?: string;
}

// 알림 목록 불러오기 GET api 연결 (/notifications)
const AlarmPage = () => {
  // const dummyData = [
  //   {
  //     id: "alarm_1",
  //     date: "2024/06/18",
  //     type: 1,
  //     interest: "프리미어리그",
  //     title: "토트넘 vs 울버햄튼",
  //   },
  //   {
  //     id: "alarm_2",
  //     date: "2024/06/18",
  //     type: 2,
  //     title: "알림이 제대로 오지 않았습니다.",
  //     reply:
  //       "정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다.왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~ 정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다....미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~정말정말 죄송합니다. 왜 안 갔지 나도 진짜 모르겠다.... 미안미안해~~~~",
  //   },
  //   {
  //     id: "alarm_3",
  //     date: "2024/06/18",
  //     type: 3,
  //     title: "미식축구",
  //   },
  // ];
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    // 토큰 없으면(비로그인) 홈화면으로 이동
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies.token]);

  // 일반사용자 알림 목록보기 GET
  const [notifListData, setNotifListData] = useState<NotifData[]>([]);

  const getAlarmList = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/notifications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      const result = await response.json();
      console.log("alarm 개수", notifListData);

      if (response.status === 200) {
        setNotifListData(result.count);
      } else if (response.status === 400) {
        alert("유효하지 않은 요청입니다.");
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error fetching alarm number:", error);
    }
  };

  useEffect(() => {
    getAlarmList();
  }, []);

  return (
    <>
      <HeaderSidebarContainer />
      <div className="w-[100%] h-[50px] flex items-center font-bold text-xl mb-5 fixed top-[50px] bg-white">
        [ 알림함 ]
      </div>

      <section className="mt-[120px]">
        {notifListData.length > 0 ? (
          <>
            <h2 className="font-bold text-l mt-7 mb-2">오늘 받은 알림</h2>
            <article className="flex flex-col items-center justify-start">
              {notifListData.map((elem) => {
                return <AlarmItem key={elem.id} data={elem} />;
              })}
            </article>

            <div className="flex items-end mt-7 mb-2">
              <h2 className="font-bold text-l mr-5">이전 알림</h2>
              <span className="text-xs text-alertColor">30일 후 자동 삭제 됩니다</span>
            </div>
            <article className="flex flex-col items-center justify-start">
              {notifListData.map((elem) => {
                return <AlarmItem key={elem.id} data={elem} />;
              })}
            </article>
          </>
        ) : (
          <article>djqtdma</article>
        )}
      </section>
    </>
  );
};
export default AlarmPage;
