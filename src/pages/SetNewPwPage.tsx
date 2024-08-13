import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

// 비밀번호 재설정 PUT api 연결 (/users/pw)
const SetNewPwPage = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [newPw, setNewPw] = useState("");

  const setNewPwEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/users/pw`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          pw: newPw,
        }),
      });

      if (response.ok) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        navigate("/");
      } else {
        alert("비밀번호 변경에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("비밀번호 변경 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[45vw]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[55vw] bg-white rounded-l-[30px]">
        <div className="w-full flex flex-col justify-around items-center">
          <div className="w-[70%]">
            <InputItem
              label="새로운 비밀번호"
              type="password"
              placeholder="8~16글자로 입력해주세요"
              value="newPw"
              onChange={(e) => setNewPw(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-[70%] justify-between items-center mt-[20px]">
            <button
              onClick={setNewPwEvent}
              className="w-full py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold"
            >
              비밀번호 수정 하기
            </button>
            <Link to="/">
              <span className="text-sm">로그인하러 가기</span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SetNewPwPage;
