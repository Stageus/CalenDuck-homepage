import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import mainLogo from "shared/imgs/mainLogo.svg";
import InputItem from "shared/components/InputItem";

// 회원가입 POST api 연결 (/users)
const SignUpPage = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const signUpEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          id: id,
          pw: pw,
          name: name,
          email: email,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setCookies("token", data.token, { path: "/" });
        alert("회원가입에 성공하셨습니다.");
        navigate("/");
      } else {
        alert("회원가입에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isSignUpBtnDisabled, setIsSignUpBtnDisabled] = useState(true);

  // 하나의 checkbox 클릭에 따른 토글 onChange
  const toggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // 이미 check 되어있는 건 (이미 checkedList에 포함되어 있던 건) 다시 누르면 value를 제외한 새로운 checkedList를 반환 (filter)
    // check 되어 있지 않은 건 누르면 checkedList에 포함됨 (기존에 존재하는 것과 더불어 ...prev)
    setCheckedList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  // 전체동의 누를 경우 아래 checkbox 모두 속성 checked
  const toggleSelectAll = () => {
    if (checkedList.length === requiredCheckboxes.length) {
      setCheckedList([]);
    } else {
      setCheckedList(requiredCheckboxes);
    }
  };
  // 체크된 아이템이 두 개 모두 있을 경우 signUpBtn 활성화, 하나라도 체크가 안 되었을 경우 비활성화
  const requiredCheckboxes = ["이용약관", "개인정보 수집 및 동의"];
  useEffect(() => {
    setIsSignUpBtnDisabled(checkedList.length !== requiredCheckboxes.length);
  }, [checkedList]);

  // 회원가입 버튼 클릭 이벤트

  return (
    <section className="fixed left-0 w-[100vw] h-[100vh] flex bg-keyColor ">
      <div className="flex justify-center items-center w-[40%]">
        <img src={mainLogo} alt="메인로고" />
      </div>

      <article className="flex flex-col justify-center items-center w-[60%] bg-white rounded-l-[30px]">
        <div className="w-full flex flex-col justify-around items-center">
          <div className="w-[70%]">
            <InputItem
              label="아이디"
              type="text"
              placeholder="6~12글자로 입력해주세요"
              extraBtn="중복확인"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <InputItem
              label="비밀번호"
              type="password"
              placeholder="8~16글자로 입력해주세요"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <InputItem
              label="이름"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputItem
              label="이메일"
              type="email"
              extraBtn="번호 전송"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputItem label="인증번호" type="text" extraBtn="인증 확인" value="" />
          </div>

          <div className="flex flex-col w-[70%] mb-[10px]">
            <label>
              <input
                type="checkbox"
                value="전체동의"
                className="mr-[5px]"
                // 아래 체크박스 전부 체크 됐으면
                checked={checkedList.length === requiredCheckboxes.length}
                onChange={toggleSelectAll}
              />
              <span className="text-sm">전체동의</span>
            </label>
            <hr className="my-[5px]" />
            <label className="w-full flex justify-between items-center mb-[2px]">
              <div>
                <input
                  type="checkbox"
                  value="이용약관"
                  className="mr-[5px]"
                  checked={checkedList.includes("이용약관")}
                  onChange={toggleCheck}
                />
                <span className="text-sm">이용약관 (필수)</span>
              </div>
              <button className="border border-black px-[5px] py-[3px] rounded-[5px] text-xs">
                전문보기
              </button>
            </label>
            <label className="w-full flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  value="개인정보 수집 및 동의"
                  className="mr-[5px]"
                  checked={checkedList.includes("개인정보 수집 및 동의")}
                  onChange={toggleCheck}
                />
                <span className="text-sm">개인정보 수집 및 동의 (필수)</span>
              </div>
              <button className="border border-black px-[5px] py-[3px] rounded-[5px] text-xs">
                전문보기
              </button>
            </label>
          </div>

          <div className="w-[70%] flex flex-col justify-between items-center">
            <button
              disabled={isSignUpBtnDisabled}
              className="w-full py-[10px] mb-[10px] bg-keyColor rounded-[5px] font-bold"
              onClick={signUpEvent}
            >
              회원가입
            </button>
            <button className="w-full py-[10px] mb-[10px] bg-yellow-500 rounded-[5px] font-bold">
              카카오 회원가입
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
export default SignUpPage;
