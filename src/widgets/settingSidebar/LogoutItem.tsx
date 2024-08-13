import React from "react";
import { useCookies } from "react-cookie";
import { useResetRecoilState } from "recoil";
import userInfoAtom from "shared/recoil/userInfoAtom";

// 로그아웃
const LogoutItem = () => {
  const [, , removeCookie] = useCookies(["token"]);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const logoutEvent = () => {
    removeCookie("token", { path: "/" });
    resetUserInfo();
  };
  return (
    <button
      onClick={logoutEvent}
      className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor"
    >
      로그아웃
    </button>
  );
};

export default LogoutItem;
