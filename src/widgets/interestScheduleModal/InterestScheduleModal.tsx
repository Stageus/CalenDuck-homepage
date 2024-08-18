import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import InterestScheduleItem from "widgets/interestScheduleModal/InterestScheduleItem";
import PostNewInterestScheduleItem from "widgets/interestScheduleModal/PostNewInterestScheduleItem";
import { useRecoilValue } from "recoil";
import selectedDateAtom from "shared/recoil/selectedDateAtom";
import { useCookies } from "react-cookie";
import { TScheduleItem } from "types";

// 특정 날짜 스케줄 전체 불러오기 GET api 연결 (/schedules/details/interest?date&interest_idx)
const InterestScheduleModal: React.FC = () => {
  const selectedDate = useRecoilValue(selectedDateAtom);
  const year = selectedDate && selectedDate.getFullYear();
  const month = selectedDate && (selectedDate.getMonth() + 1).toString().padStart(2, "0");
  const date = selectedDate && selectedDate.getDate().toString().padStart(2, "0");
  const fullDate = `${year}${month}${date}`;

  const [cookies] = useCookies(["token"]);
  const [managingScheduleList, setManagingScheduleList] = useState<TScheduleItem[]>([]);
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const managingInterest = urlSearch.get("interest");

  useEffect(() => {
    const getManagerScheduleList = async () => {
      try {
        const response = await fetch(
          `${
            process.env.REACT_APP_API_KEY
          }/schedules/details/interest?date=${fullDate}&interest_idx=${1}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        const result = await response.json();

        if (response.status === 201) {
          setManagingScheduleList(result.list);
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        } else if (response.status === 403) {
          console.log("권한이 없는 사용자의 접근");
        } else if (response.status === 404) {
          console.log("해당 스케줄 없음");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getManagerScheduleList();
  }, [fullDate, cookies.token]);

  // const dummyData = [
  //   {
  //     id: "schedule_1",
  //     interest: "뮤지컬",
  //     time: "14:00",
  //     title: "인프 11주차 과제",
  //   },
  //   {
  //     id: "schedule_2",
  //     interest: "뮤지컬",
  //     time: "12:00",
  //     title: "콘서트 티켓팅",
  //   },
  //   {
  //     id: "schedule_3",
  //     interest: "뮤지컬",
  //     time: "19:30",
  //     title: "시카고",
  //   },
  //   {
  //     id: "schedule_4",
  //     interest: "뮤지컬",
  //     time: "23:00",
  //     title: "미국 vs 멕시코 경기",
  //   },
  //   {
  //     id: "schedule_5",
  //     interest: "뮤지컬",
  //     time: "23:59",
  //     title: "가나다라마바사아자차카타파하가나다라마바사",
  //   },
  // ];

  // URL 쿼리스트링을 통한 내가 manager인 interest 추출

  return (
    <section className="bg-keyColor w-[717px] h-[486px] p-[20px] flex justify-center items-center drop-shadow">
      <div className="bg-white w-full h-full flex flex-col items-center ">
        {/* 상단 */}
        <article className="w-[655px] h-[15%] px-[20px] flex justify-start items-center">
          <div className="font-bold	text-xl mr-[20px]">{managingInterest}</div>
          <div className="font-bold	text-xl">{`${year}/${month}/${date}`}</div>
        </article>

        {/* 새로운 스케줄 입력란 */}
        <PostNewInterestScheduleItem />

        {/* 해당 날짜의 스케줄 리스트 */}
        <article className="flex flex-col items-center justify-start h-[70%] overflow-auto">
          {managingScheduleList.map((elem) => {
            return <InterestScheduleItem key={elem.idx} data={elem} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default InterestScheduleModal;
