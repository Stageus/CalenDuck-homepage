import React from "react";
import InputItem from "../shared/components/InputItem";

const SignUpPage = () => {
  return (
    <>
      <h1>회원가입페이지</h1>
      <InputItem
        label="아이디"
        type="text"
        placeholder="3~10글자로 입력해주세요"
        extraBtn="중복확인"
      />
      <InputItem label="비밀번호" type="pw" placeholder="3~10글자로 입력해주세요" extraBtn="" />
      <InputItem label="이름" type="text" placeholder="3~10글자로 입력해주세요" extraBtn="" />
      <InputItem
        label="이메일"
        type="email"
        placeholder="3~10글자로 입력해주세요"
        extraBtn="번호 전송"
      />
      <InputItem
        label="인증번호"
        type="text"
        placeholder="3~10글자로 입력해주세요"
        extraBtn="인증 확인"
      />
    </>
  );
};
export default SignUpPage;
