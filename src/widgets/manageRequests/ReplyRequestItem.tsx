import React from "react";

// 문의 답변 작성 POST api 연결 (/master/asks/:idx/reply)
const ReplyRequestItem = () => {
  return (
    <div className="mx-[50px] mt-[30px] mb-[20px] flex flex-col items-end">
      <textarea
        className="w-[100%] p-[10px] mb-[10px] outline-keyColor"
        placeholder="( 답변 입력 )"
      />
      <button className="bg-subColor text-sm w-[80px] py-[3px] rounded-[5px]">전송</button>
    </div>
  );
};

export default ReplyRequestItem;
