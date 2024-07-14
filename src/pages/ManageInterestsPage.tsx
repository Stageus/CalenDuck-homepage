import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import InterestItem from "widgets/manageInterests/InterestItem";
import NewInterestItem from "widgets/manageInterests/NewInterestItem";

// 관심사 목록 불러오기 GET api 연결 (/interests)
const ManageInterestsPage = () => {
  const location = useLocation();

  const dummyData = [
    {
      id: 1,
      interest: "에스파",
    },
    {
      id: 2,
      interest: "클래식 연주회",
    },
    {
      id: 3,
      interest: "미식축구",
    },
    {
      id: 4,
      interest: "리그오브레전드",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
    {
      id: 5,
      interest: "뮤지컬",
    },
  ];

  return (
    <>
      <HeaderItem />

      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>

      {/* 관심사 리스트 */}
      <section className="mt-[70px] ml-[90px]">
        <table className="min-w-full bg-white">
          <thead className="w-[100%]">
            <tr className="w-[80%] px-[10%] flex justify-start border-b border-gray-200">
              <th className="w-[10%] py-4">
                <div className="flex justify-start">No</div>
              </th>
              <th className="w-[50%] py-4">
                <div className="flex justify-start px-2">관심사</div>
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%] h-[65vh] overflow-y-auto flex flex-col">
            {dummyData.map((elem) => {
              return <InterestItem key={elem.id} data={elem} />;
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
