import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

// 신규 알림 개수 불러오기 GET api 연결 (/notifications/counts)
const HeaderAlarmNumTagItem = () => {
  const [notifCount, setNotifCount] = useState<number | null>(null);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchAlarmNum = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/notifications/counts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.log("잘못된 인증 정보 제공");
          }
          return;
        }
        const result = await response.json();
        if (response.status === 200) {
          setNotifCount(result.notif_count);
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    fetchAlarmNum();
  }, [cookies.token]);

  if (notifCount === null) {
    return null;
  }

  return (
    <>
      {notifCount > 0 && (
        <div className="bg-alertColor rounded-full text-white px-[5px] py-[2px] text-xs">
          {notifCount > 5 ? "5+" : notifCount}
        </div>
      )}
    </>
  );
};

export default HeaderAlarmNumTagItem;
