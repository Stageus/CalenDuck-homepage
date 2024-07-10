import React from "react";
import MySubjectItem from "widgets/settingSidebar/MySubjectItem";

// 내 관심사 불러오기 GET api 연결 (/users/subjects)
const MySubjectList = () => {
  const dummyData = [
    {
      id: "mySubject_1",
      subject: "미식축구",
    },
    {
      id: "mySubject_2",
      subject: "야구",
    },
    {
      id: "mySubject_3",
      subject: "분데스리가",
    },
    {
      id: "mySubject_4",
      subject: "NBA",
    },
    {
      id: "mySubject_5",
      subject: "뮤지컬",
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
          return <MySubjectItem key={elem.id} data={elem} />;
        })}
      </div>
    </article>
  );
};

export default MySubjectList;
