import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import InterestItem from "widgets/manageInterests/InterestItem";
import NewInterestItem from "widgets/manageInterests/NewInterestItem";
import { useCookies } from "react-cookie";
import { TInterestItem } from "types";

// 관심사 목록 불러오기 GET api 연결 (/interests/all)
const ManageInterestsPage = () => {
  const location = useLocation();
  const [interestsListData, setInterestsListData] = useState<TInterestItem[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const getInterestsList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/interests/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.log("잘못된 인증 정보 제공");
          } else if (response.status === 403) {
            console.log("권한이 없는 사용자의 접근");
          }
          return;
        }
        const result = await response.json();
        if (response.status === 200) {
          setInterestsListData(result.list);
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getInterestsList();
  }, [cookies.token]);

  // const dummyData = [
  //   {
  //     id: 1,
  //     interest: "에스파",
  //   },
  //   {
  //     id: 2,
  //     interest: "클래식 연주회",
  //   },
  //   {
  //     id: 3,
  //     interest: "미식축구",
  //   },
  //   {
  //     id: 4,
  //     interest: "리그오브레전드",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 5,
  //     interest: "뮤지컬",
  //   },
  // ];

  return (
    <>
      <HeaderItem />

      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>

      {/* 관심사 리스트 */}
      <section className="mt-[70px] ml-[90px]">
        <table className="min-w-full bg-white">
          <thead className="w-full">
            <tr className="w-full px-[10%] flex justify-start border-b border-gray-200">
              <th className="w-[10%] py-4 flex justify-start">No</th>
              <th className="w-[50%] py-4 flex justify-start px-2">관심사</th>
            </tr>
          </thead>
          <tbody className="w-full h-[65vh] overflow-y-auto flex flex-col">
            {interestsListData.map((elem) => {
              return <InterestItem key={elem.interestIdx} data={elem} />;
            })}
          </tbody>
        </table>
      </section>

      {/* 새로운 관심사 입력란 */}
      <NewInterestItem />
    </>
  );
};

export default ManageInterestsPage;
