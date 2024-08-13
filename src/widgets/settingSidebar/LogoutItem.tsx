import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import userInfoAtom from "shared/recoil/userInfoAtom";

// 로그아웃
const LogoutItem = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const logoutEvent = () => {
    removeCookie("token", { path: "/" });
    resetUserInfo();
    alert("로그아웃 되었습니다");
    navigate("/");
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
