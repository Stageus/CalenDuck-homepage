import React from "react";

import { Link } from "react-router-dom";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

const SetNewPwPage = () => {
  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[45vw]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[55vw] bg-white rounded-l-[30px]">
        <div className="h-[30%] flex flex-col justify-around">
          <div className="w-[100%]">
            <InputItem
              label="새로운 비밀번호"
              type="password"
              placeholder="8~16글자로 입력해주세요"
              extraBtn=""
            />
          </div>

          <div className="flex flex-col w-[100%] justify-between items-center">
            <button className="w-[100%] py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold">
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
