import React from "react";
import MyInterestItem from "widgets/settingSidebar/MyInterestItem";

// 내 관심사 불러오기 GET api 연결 (/users/interests)
const MyInterestList = () => {
  const dummyData = [
    {
      id: "myInterest_1",
      interest: "미식축구",
    },
    {
      id: "myInterest_2",
      interest: "야구",
    },
    {
      id: "myInterest_3",
      interest: "분데스리가",
    },
    {
      id: "myInterest_4",
      interest: "NBA",
    },
    {
      id: "myInterest_5",
      interest: "뮤지컬",
    },
  ];

  return (
    <article className="w-[100%]">
      <div className="flex justify-start items-end">
        <h3 className="mr-[5px] font-semibold">내 관심사</h3>
        <span className="text-alertColor text-xs">최대 5개까지 선택 가능합니다</span>
      </div>
      <div className="w-[100%] h-[250px] mt-[10px] flex flex-col justify-start">
        {dummyData.map((elem) => {
          return <MyInterestItem key={elem.id} data={elem} />;
        })}
      </div>
    </article>
  );
};

export default MyInterestList;
