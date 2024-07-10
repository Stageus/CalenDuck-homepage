import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import ManagerItem from "widgets/manageManagers/ManagerItem";
import NewManagerItem from "widgets/manageManagers/NewManagerItem";

// 관심사 계정 목록 불러오기 GET api 연결 (/master/managers)
const ManageManagersPage = () => {
  const location = useLocation();

  const dummyData = [
    {
      id: 1,
      managerNickname: "민석최",
      subject: "에스파",
    },
    {
      id: 2,
      managerNickname: "소미유",
      subject: "클래식 연주회",
    },
    {
      id: 3,
      managerNickname: "윤서박",
      subject: "미식축구",
    },
    {
      id: 4,
      managerNickname: "수인리",
      subject: "리그오브레전드",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
    {
      id: 5,
      managerNickname: "경은조",
      subject: "뮤지컬",
    },
  ];

  return (
    <>
      <HeaderItem />

      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>

      {/* 관심사 관리자(매니저) 계정 리스트 */}
      <section className="mt-[70px] ml-[90px]">
        <table className="min-w-full bg-white">
          <thead className="w-[100%]">
            <tr className="w-[80%] px-[10%] flex justify-start border-b border-gray-200">
              <th className="w-[10%] py-4">
                <div className="flex justify-start">No</div>
              </th>
              <th className="w-[30%] py-4">
                <div className="flex justify-start px-2">관리자 닉네임</div>
              </th>
              <th className="w-[50%] py-4">
                <div className="flex justify-start px-2">관심사</div>
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%] h-[65vh] overflow-y-auto flex flex-col">
            {dummyData.map((elem) => {
              return <ManagerItem key={elem.id} data={elem} />;
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
