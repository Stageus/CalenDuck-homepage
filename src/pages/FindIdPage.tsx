import React, { useState } from "react";

import { Link } from "react-router-dom";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

// 아이디 찾기 POST api 연결 (/users/id/find)
const FindIdPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verCode, setVerCode] = useState("");
  const [foundId, setFoundId] = useState("");

  const findIdEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/users/id/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          verCode: verCode,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setFoundId(data.id);
      } else {
        alert("아이디 찾기에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("아이디를 찾는 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[40%]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[60%] bg-white rounded-l-[30px]">
        <div className="w-full flex flex-col justify-around items-center">
          <div className="w-[70%]">
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

          {/* 아이디 찾기 결과 */}
          <div className="w-[70%] h-[80px] bg-tagColor flex justify-center items-center rounded-[10px] my-4">
            {!foundId ? "존재하지 않는 사용자입니다." : `아이디는 ${foundId}입니다.`}
          </div>

          <div className="flex flex-col w-[70%] justify-between items-center">
            <button
              onClick={findIdEvent}
              className="w-full py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold"
            >
              아이디 찾기
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

export default FindIdPage;
