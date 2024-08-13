import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { TRequestItem } from "types";

// 문의 답변 작성 POST api 연결 (/master/asks/:idx/reply)
const ReplyRequestItem = ({ askIdx }: TRequestItem) => {
  const [reply, setReply] = useState("");
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const sendReplyEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/asks/${askIdx}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          askReply: reply,
        }),
      });

      if (response.ok) {
        alert("답변 작성을 완료하셨습니다.");
        navigate("/");
      } else if (response.status === 401) {
        console.log("정규식 위반");
        alert("답변 작성에 실패하셨습니다.");
      } else if (response.status === 403) {
        console.log("관리자 아님");
        alert("답변 작성에 실패하셨습니다.");
      } else if (response.status === 404) {
        console.log("문의 없음");
        alert("답변 작성에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("답변 작성 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className="mx-[50px] mt-[30px] mb-[20px] flex flex-col items-end">
      <textarea
        className="w-full p-[10px] mb-[10px] outline-keyColor"
        placeholder="( 답변 입력 )"
        onChange={(e) => setReply(e.target.value)}
      />
      <button
        onClick={sendReplyEvent}
        className="bg-subColor text-sm w-[80px] py-[3px] rounded-[5px]"
      >
        전송
      </button>
    </div>
  );
};

export default ReplyRequestItem;
