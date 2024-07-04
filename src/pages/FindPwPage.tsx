import React from "react";

import { Link } from "react-router-dom";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

const FindPwPage = () => {
  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[45vw]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[55vw] bg-white rounded-l-[30px]">
        <div className="h-[50%] flex flex-col justify-around">
          <div className="w-[100%]">
            <InputItem
              label="아이디"
              type="text"
              placeholder="6~12글자로 입력해주세요"
              extraBtn="중복확인"
            />
            <InputItem label="이름" type="text" placeholder="" extraBtn="" />
            <InputItem label="이메일" type="email" placeholder="" extraBtn="번호 전송" />
            <InputItem label="인증번호" type="text" placeholder="" extraBtn="인증 확인" />
          </div>

          <div className="flex flex-col w-[100%] justify-between items-center">
            <button className="w-[100%] py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold">
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
