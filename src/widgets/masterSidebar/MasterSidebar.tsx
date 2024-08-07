import React from "react";
import { Link } from "react-router-dom";

const MasterSidebar = ({ currentPath }: any) => {
  const getLinkBtnClassNames = (path: any) =>
    [
      `w-[100%] px-[15px] py-[15px] rounded-[5px] flex justify-end`,
      currentPath === path && "bg-alertColor text-white",
      currentPath !== path && "hover:bg-subColor",
    ].join(" ");

  return (
    <section className="w-[256px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center py-[20px]">
      <article className="w-[100%]">
        <Link to="/manageSubjectRequests">
          <button className={getLinkBtnClassNames("/manageSubjectRequests")}>
            관심사 추가 문의
          </button>
        </Link>
        <Link to="/manageEtcRequests">
          <button className={getLinkBtnClassNames("/manageEtcRequests")}>기타 문의</button>
        </Link>
        <Link to="/manageManagers">
          <button className={getLinkBtnClassNames("/manageManagers")}>
            관심사 관리자 계정 관리
          </button>
        </Link>
        <Link to="/manageSubjects">
          <button className={getLinkBtnClassNames("/manageSubjects")}>관심사 관리</button>
        </Link>
      </article>

      <div className="w-[100%] mt-auto flex justify-end">
        <button className="border border-black rounded-[5px] px-[10px] py-[5px] mr-[15px]">
          로그아웃
        </button>
      </div>
    </section>
  );
};

export default MasterSidebar;
