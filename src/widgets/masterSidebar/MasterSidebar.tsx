import React from "react";
import { Link } from "react-router-dom";

const MasterSidebar = () => {
  return (
    <section className="w-[256px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center py-[20px]">
      <article className="w-[100%]">
        <Link to="/manageSubjectRequests">
          <button className="w-[100%] px-[15px] py-[15px] rounded-[5px] hover:bg-subColor flex justify-end">
            관심사 추가 문의
          </button>
        </Link>
        <Link to="/manageEtcRequests">
          <button className="w-[100%] px-[10px] py-[15px] rounded-[5px] hover:bg-subColor flex justify-end">
            기타 문의
          </button>
        </Link>
        <Link to="/manageManagers">
          <button className="w-[100%] px-[10px] py-[15px] rounded-[5px] hover:bg-subColor flex justify-end">
            관심사 관리자 계정 관리
          </button>
        </Link>
        <Link to="/manageSubjects">
          <button className="w-[100%] px-[10px] py-[15px] rounded-[5px] hover:bg-subColor flex justify-end">
            관심사 관리
          </button>
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
