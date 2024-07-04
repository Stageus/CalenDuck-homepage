import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";
import ManageItem from "widgets/ManageItem";

import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 관심사 관리자(매니저) 계정 관리 페이지
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
          <thead className="w-[100%] border border-red-500">
            <tr className="w-[80%] px-[10%] flex justify-start border-b border-gray-200">
              <th className="w-[10%] px-[10px] py-4 border border-blue-500">
                <div className="flex justify-start">No</div>
              </th>
              <th className="w-[30%] px-[10px] py-4 border border-blue-500">
                <div className="flex justify-start px-2">관리자 닉네임</div>
              </th>
              <th className="w-[50%] px-[10px] py-4 border border-blue-500">
                <div className="flex justify-start px-2">관심사</div>
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%] flex flex-col border border-red-500">
            {dummyData.map((elem) => {
              return <ManageItem key={elem.id} data={elem} />;
            })}
          </tbody>
        </table>
      </section>

      {/* 새로운 관심사 관리자(매니저) 입력란 */}
      <section className="fixed bottom-[90px] ml-[90px] w-[calc(100vw-500px)]">
        <table className="min-w-full">
          <thead className="w-[100%] border border-red-500 bg-subColor">
            <tr className="w-[100%] px-[10%] flex justify-between items-center my-[10px] border border-green-500">
              <div className="flex w-[80%]">
                <div className="w-[10%] px-[10px] py-4 border border-blue-500 flex justify-start items-center">
                  + NEW
                </div>
                <input
                  placeholder="닉네임 입력"
                  className="flex w-[30%] px-[10px] py-2 m-2 justify-start "
                />
                <input
                  placeholder="관심사 입력"
                  className="flex w-[50%] px-[10px] py-2 m-2 justify-start"
                />
              </div>

              <th className="w-[15%] border border-blue-500 flex justify-between px-[10px]">
                <button>
                  <img src={minus} alt="minu" />
                </button>
                <button>
                  <img src={plus} alt="plus" />
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </section>
    </>
  );
};

export default ManageManagersPage;
