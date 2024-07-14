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

        const result = await response.json();
        console.log("alarm 개수", notifCount);

        if (response.status === 200) {
          setNotifCount(result.notifCount);
        } else if (response.status === 400) {
          alert("유효하지 않은 요청입니다.");
        } else {
          console.error("Unexpected response:", response);
        }
      } catch (error) {
        console.error("Error fetching alarm number:", error);
      }
    };

    fetchAlarmNum();
  }, [cookies.token]);

  if (notifCount === null) {
    return null;
  }

  return (
    <div className="bg-alertColor rounded-full text-white px-[5px] py-[2px] text-xs">
      {notifCount > 5 ? "5+" : notifCount}
    </div>
  );
};

export default HeaderAlarmNumTagItem;
