import React from "react";

import { Link } from "react-router-dom";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

const SignInPage = () => {
  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[45vw]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[55vw] bg-white rounded-l-[30px]">
        <div className="h-[40%] flex flex-col justify-around">
          <div className="w-[100%]">
            <InputItem label="아이디" type="text" placeholder="최대 10자 이내로 입력해주세요" />
            <InputItem
              label="비밀번호"
              type="password"
              placeholder="최대 20자 이내로 입력해주세요"
            />
          </div>

          <div className="flex flex-col w-[100%]">
            <button className="w-[100%] py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold">
              회원가입
            </button>
            <button className="w-[100%] py-[10px] bg-yellow-500 rounded-[5px] font-bold">
              카카오로 시작
            </button>
          </div>

          <div className="flex justify-between">
            <Link to="/signUp">
              <span>계정이 없으세요? 회원가입</span>
            </Link>

            <div className="flex">
              <Link to="/findId">
                <span>아이디 찾기 &nbsp;</span>
              </Link>
              /
              <Link to="/findPw">
                <span> &nbsp; 비밀번호 찾기</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default SignInPage;
