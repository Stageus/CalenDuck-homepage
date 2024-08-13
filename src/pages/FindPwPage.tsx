import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

// 비밀번호 찾기 POST api 연결 (/users/pw/find)
const FindPwPage = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verCode, setVerCode] = useState("");

  const findPwEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/users/pw/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          verCode: verCode,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCookie("token", data.cookies.token, { path: "/" });
        navigate("/setNewPw");
      } else {
        alert("비밀번호 찾기에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("비밀번호를 찾는 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[40%]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[60%] bg-white rounded-l-[30px]">
        <div className="w-full flex flex-col items-center">
          <div className="w-[70%]">
            <InputItem
              label="아이디"
              type="text"
              placeholder="6~12글자로 입력해주세요"
              extraBtn="중복확인"
              value="id"
              onChange={(e) => setId(e.target.value)}
            />
            <InputItem
              label="이름"
              type="text"
              value="name"
              onChange={(e) => setName(e.target.value)}
            />
            <InputItem
              label="이메일"
              type="email"
              extraBtn="번호 전송"
              value="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputItem
              label="인증번호"
              type="text"
              extraBtn="인증 확인"
              value="verCode"
              onChange={(e) => setVerCode(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-[70%] mt-5 justify-between items-center">
            <button
              onClick={findPwEvent}
              className="w-full py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold"
            >
              비밀번호 재설정 하기
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

export default FindPwPage;
