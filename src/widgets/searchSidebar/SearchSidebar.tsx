import React, { useState, useEffect, useRef } from "react";

import { useRecoilState } from "recoil";
import searchSidebarToggleAtom from "shared/recoil/searchSidebarToggleAtom";

import SearchItem from "widgets/searchSidebar/SearchItem";
import SearchDateUtil from "widgets/searchSidebar/SearchDateUtil";

import search from "shared/imgs/search.svg";
import { useCookies } from "react-cookie";
import { TScheduleItem } from "types";
import ScheduleModal from "widgets/scheduleModal/ScheduleModal";

// 스케줄 검색 결과 불러오기 GET api 연결 (/schedules/searches?start_date&end_date&content)
const SearchSidebar: React.FC = () => {
  // const dummyData = [
  //   {
  //     id: "searchResult_1",
  //     title: "알고리즘 11주차 과제 마감akrkakdalkjdflk",
  //     date: "2024/06/04",
  //   },
  //   {
  //     id: "searchResult_2",
  //     title: "알고리즘 10주차 과제 마감",
  //     date: "2024/05/10",
  //   },
  //   {
  //     id: "searchResult_3",
  //     title: "알고리즘 9주차 과제 마감",
  //     date: "2024/05/03",
  //   },
  //   {
  //     id: "searchResult_4",
  //     title: "알고리즘 8주차 과제 마감",
  //     date: "2024/04/26",
  //   },
  //   {
  //     id: "searchResult_5",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_6",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_7",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_8",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_9",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_10",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_11",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  //   {
  //     id: "searchResult_12",
  //     title: "알고리즘 7주차 과제 마감",
  //     date: "2024/04/19",
  //   },
  // ];

  // 검색 기간의 시작점 지정에 따른 끝점의 최소값 설정

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const keyWordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return SearchDateUtil(startDateRef, endDateRef);
  }, []);

  // 검색기간, 검색어 중 하나라도 미입력 후 검색 진행 시 경고문구 출력
  const [alert, setAlert] = useState<boolean>(false);
  const [cookies] = useCookies(["token"]);
  const [seachScheduleList, setSearchScheduleList] = useState<TScheduleItem[]>([]);

  const clickSearchEvent = async () => {
    const startDateValue = startDateRef.current?.value.split("-").join("");
    const endDateValue = endDateRef.current?.value.split("-").join("");
    const keyWordValue = keyWordRef.current?.value;

    if (!startDateValue || !endDateValue || !keyWordValue) {
      setAlert(true);
    } else {
      setAlert(false);
      // 빈칸이 아니라면 데이터 GET
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}/schedules/searches?start_date=${startDateValue}&end_date=${endDateValue}&content=${keyWordValue}`,
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
          setSearchScheduleList(result.list);
        } else if (response.status === 400) {
          console.log("정규식 위반");
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    }
  };

  // 검색 사이드바 토글
  const [searchSidebarToggle, setSearchSidebarToggle] = useRecoilState(searchSidebarToggleAtom);
  if (!searchSidebarToggle) {
    return null;
  }

  return (
    <section className="w-[310px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center p-[20px]">
      {/* 검색 입력 */}
      <article className="w-full h-[120px] mb-[50px] flex flex-col justify-between">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full h-[95px] flex flex-col justify-between"
        >
          {/* 검색 기간 */}
          <div className="w-full flex justify-between items-center">
            <input
              type="date"
              required
              className="p-1 h-[42px] text-sm	border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
              ref={startDateRef}
            />
            <span>-</span>
            <input
              type="date"
              required
              className="p-1 h-[42px] text-sm border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
              ref={endDateRef}
            />
          </div>
          {/* 검색어 */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder="스케줄을 입력하세요"
              className="w-full h-[42px] p-1 border border-black rounded-[5px] focus:border-none focus:outline-none focus:shadow focus:shadow-inputFocus"
              ref={keyWordRef}
            />
            <button
              onClick={clickSearchEvent}
              className="w-[20px] h-[20px] absolute top-1/2 right-[10px] transform -translate-y-1/2"
            >
              <img src={search} alt="검색하기" className="w-full h-full" />
            </button>
          </div>
        </form>

        {alert && (
          <div className="text-alertColor text-xs flex justify-end">
            원하시는 기간을 입력해주세요
          </div>
        )}
      </article>

      {/* 검색결과 리스트 */}
      <article className="w-full h-[80%] overflow-auto">
        {seachScheduleList.map((elem) => {
          return <SearchItem key={elem.idx} data={elem} />;
        })}
      </article>
    </section>
  );
};

export default SearchSidebar;
