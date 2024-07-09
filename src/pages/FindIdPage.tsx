import React from "react";

import { Link } from "react-router-dom";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

// 아이디 찾기 POST api 연결 (/users/id/find)
const FindIdPage = () => {
  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[45vw]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[55vw] bg-white rounded-l-[30px]">
        <div className="h-[50%] flex flex-col justify-around">
          <div className="w-[100%]">
            <InputItem label="이름" type="text" placeholder="" extraBtn="" />
            <InputItem label="이메일" type="email" placeholder="" extraBtn="번호 전송" />
            <InputItem label="인증번호" type="text" placeholder="" extraBtn="인증 확인" />
          </div>

          {/* 아이디 찾기 결과 */}
          <div className="w-[100%] h-[80px] bg-tagColor flex justify-center items-center rounded-[10px]">
            존재하지 않는 사용자입니다.
          </div>

          <div className="flex flex-col w-[100%] justify-between items-center">
            <button className="w-[100%] py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold">
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
