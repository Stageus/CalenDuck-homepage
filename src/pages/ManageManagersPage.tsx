import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import ManagerItem from "widgets/manageManagers/ManagerItem";
import NewManagerItem from "widgets/manageManagers/NewManagerItem";
import { TManagerItem } from "types";
import { useCookies } from "react-cookie";

// 관심사 계정 목록 불러오기 GET api 연결 (/master/managers)
const ManageManagersPage = () => {
  const location = useLocation();
  const [managersListData, setManagersListData] = useState<TManagerItem[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const getManagersList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/managers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.log("토큰 검증 실패");
          } else if (response.status === 403) {
            console.log("권한이 없는 사용자의 접근");
          }
          return;
        }

        const result = await response.json();
        if (response.status === 200) {
          setManagersListData(result.list);
        } else if (response.status === 204) {
          console.log("관심사 계정 목록 없음");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getManagersList();
  }, [cookies.token]);

  // const dummyData = [
  //   {
  //     id: 1,
  //     managerNickname: "민석최",
  //     interest: "에스파",
  //   },
  //   {
  //     id: 2,
  //     managerNickname: "소미유",
  //     interest: "클래식 연주회",
  //   },
  //   {
  //     id: 3,
  //     managerNickname: "윤서박",
  //     interest: "미식축구",
  //   },
  //   {
  //     id: 4,
  //     managerNickname: "수인리",
  //     interest: "리그오브레전드",
  //   },
  //   {
  //     id: 5,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 6,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 7,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 8,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 9,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 10,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 11,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  //   {
  //     id: 12,
  //     managerNickname: "경은조",
  //     interest: "뮤지컬",
  //   },
  // ];

  return (
    <>
      <HeaderItem />

      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>

      {/* 관심사 관리자(매니저) 계정 리스트 */}
      <section className="mt-[70px] ml-[90px]">
        <table className="min-w-full bg-white">
          <thead className="w-full">
            <tr className="w-full px-[10%] flex justify-start border-b border-gray-200">
              <th className="w-[10%] py-4 flex justify-start">No</th>
              <th className="w-[30%] py-4 flex justify-start px-2">관리자 닉네임</th>
              <th className="w-[50%] py-4 flex justify-start px-2">관심사</th>
            </tr>
          </thead>
          <tbody className="w-full h-[65vh] overflow-y-auto flex flex-col">
            {managersListData.map((elem) => {
              return <ManagerItem key={elem.managerIdx} data={elem} />;
            })}
          </tbody>
        </table>
      </section>

      {/* 새로운 관심사 관리자(매니저) 입력란 */}
      <NewManagerItem />
    </>
  );
};

export default ManageManagersPage;
