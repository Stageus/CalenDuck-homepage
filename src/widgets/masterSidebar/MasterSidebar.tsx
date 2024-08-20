import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import userInfoAtom from "shared/recoil/userInfoAtom";

const MasterSidebar = ({ currentPath }: any) => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const logoutEvent = () => {
    removeCookie("token", { path: "/" });
    resetUserInfo();
    alert("로그아웃 되었습니다");
    navigate("/");
  };

  const getLinkBtnClassNames = (path: any) =>
    [
      `w-full px-[15px] py-[15px] rounded-[5px] flex justify-end`,
      currentPath === path && "bg-alertColor text-white",
      currentPath !== path && "hover:bg-subColor",
    ].join(" ");

  return (
    <section className="w-[256px] h-sidebar bg-sidebarColor flex flex-col justify-start items-center py-[20px]">
      <article className="w-full">
        <Link to="/manageInterestRequests">
          <button className={getLinkBtnClassNames("/manageInterestRequests")}>
            관심사 추가 문의
          </button>
        </Link>
        <Link to="/manageEtcRequests">
          <button className={getLinkBtnClassNames("/manageEtcRequests")}>기타 문의</button>
        </Link>
        <Link to="/manageInterests">
          <button className={getLinkBtnClassNames("/manageInterests")}>관심사 관리</button>
        </Link>
        <Link to="/manageManagers">
          <button className={getLinkBtnClassNames("/manageManagers")}>
            관심사 관리자 계정 관리
          </button>
        </Link>
      </article>

      <div className="w-full mt-auto flex justify-end">
        <button
          onClick={logoutEvent}
          className="border border-black rounded-[5px] px-[10px] py-[5px] mr-[15px]"
        >
          로그아웃
        </button>
      </div>
    </section>
  );
};

export default MasterSidebar;
