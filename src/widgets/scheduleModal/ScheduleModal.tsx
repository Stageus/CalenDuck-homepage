import React, { useEffect, useState } from "react";

import ScheduleItem from "widgets/scheduleModal/ScheduleItem";
import DropDownItem from "shared/components/DropDownItem";
import { useRecoilValue } from "recoil";
import selectedDateAtom from "shared/recoil/selectedDateAtom";
import { useCookies } from "react-cookie";
import { TScheduleItem } from "types";
import PostNewPersonalScheduleItem from "./PostNewPersonalScheduleItem";

const ScheduleModal: React.FC = () => {
  const selectedDate = useRecoilValue(selectedDateAtom);
  const year = selectedDate && selectedDate.getFullYear();
  const month = selectedDate && (selectedDate.getMonth() + 1).toString().padStart(2, "0");
  const date = selectedDate && selectedDate.getDate().toString().padStart(2, "0");
  const fullDate = `${year}${month}${date}`;

  // const dummyData = [
  //   {
  //     id: "schedule_1",
  //     privacy: true,
  //     time: "14:00",
  //     interest: "개인",
  //     title: "인프 11주차 과제",
  //   },
  //   {
  //     id: "schedule_2",
  //     privacy: true,
  //     time: "12:00",
  //     interest: "개인",
  //     title: "콘서트 티켓팅",
  //   },
  //   {
  //     id: "schedule_3",
  //     privacy: false,
  //     time: "19:30",
  //     interest: "뮤지컬",
  //     title: "시카고",
  //   },
  //   {
  //     id: "schedule_4",
  //     privacy: false,
  //     time: "23:00",
  //     interest: "미식축구",
  //     title: "미국 vs 멕시코 경기",
  //   },
  //   {
  //     id: "schedule_5",
  //     privacy: true,
  //     time: "23:59",
  //     interest: "개인",
  //     title: "가나다라마바사아자차카타파하가나다라마바사",
  //   },
  // ];
  const [cookies] = useCookies(["token"]);
  const [scheduleList, setScheduleList] = useState<TScheduleItem[]>([]);
  const [interestOptions, setInterestOptions] = useState<string[]>([]);

  // 특정 날짜 스케줄 리스트 불러오기 GET api 연결 (/schedules/details?date)
  useEffect(() => {
    const getScheduleList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}/schedules/details?date=${fullDate}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        const result = await response.json();

        if (response.status === 200) {
          setScheduleList(result.list);
        } else if (response.status === 400) {
          console.log("정규식 위반");
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getScheduleList();
  }, [fullDate, cookies.token]);

  // 관심사 카테고리 선택 GET api 연결 (/interests)
  useEffect(() => {
    const getInterestOptions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/interests`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const result = await response.json();
        if (response.status === 200) {
          const interests = result.list.map((item: { interestName: string }) => item.interestName);
          setInterestOptions(["전체보기", ...interests]);
        } else if (response.status === 204) {
          setInterestOptions(["전체보기"]);
        } else if (response.status === 401) {
          console.log("토큰 검증 실패");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getInterestOptions();
  }, [cookies.token]);

  return (
    <section className="bg-keyColor w-[717px] h-[486px] p-[20px] flex justify-center items-center drop-shadow">
      <div className="bg-white w-full h-full flex flex-col items-center ">
        {/* 상단 */}
        <article className="w-[655px] h-[15%] px-[20px] flex justify-start items-center">
          <div className="mr-[20px]">
            <DropDownItem
              options={interestOptions}
              value={interestOptions[0] || "전체보기"}
              onChange={() => {}}
            />
          </div>
          <div className="font-bold	text-xl">{`${year}/${month}/${date}`}</div>
        </article>

        <PostNewPersonalScheduleItem />

        {/* 해당 날짜의 스케줄 리스트 */}
        <article className="flex flex-col items-center justify-start h-[70%] overflow-auto">
          {scheduleList.map((elem) => {
            return <ScheduleItem key={elem.idx} data={elem} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default ScheduleModal;
