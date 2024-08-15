import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { TInterestItem } from "types";
import MyInterestItem from "widgets/settingSidebar/MyInterestItem";

// 내 관심사 불러오기 GET api 연결 (/interests)
const MyInterestList = () => {
  const [cookies] = useCookies(["token"]);
  const [interestOptions, setInterestOptions] = useState<TInterestItem[]>([]);

  useEffect(() => {
    const getInterestOptions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/interests`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const result = await response.json();
        if (response.status === 200) {
          setInterestOptions([...result.list]);
        } else if (response.status === 204) {
          console.log("개인 관심사가 하나도 없음");
        } else if (response.status === 401) {
          console.log("토큰 검증 실패");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getInterestOptions();
  }, [cookies.token]);

  const handleRemoveInterest = (id: number) => {
    setInterestOptions(interestOptions.filter((item) => item.interestIdx !== id));
  };

  // const dummyData = [
  //   {
  //     id: "myInterest_1",
  //     interest: "미식축구",
  //   },
  //   {
  //     id: "myInterest_2",
  //     interest: "야구",
  //   },
  //   {
  //     id: "myInterest_3",
  //     interest: "분데스리가",
  //   },
  //   {
  //     id: "myInterest_4",
  //     interest: "NBA",
  //   },
  //   {
  //     id: "myInterest_5",
  //     interest: "뮤지컬",
  //   },
  // ];

  return (
    <article className="w-full">
      <div className="flex justify-start items-end">
        <h3 className="mr-[5px] font-semibold">내 관심사</h3>
        <span className="text-alertColor text-xs">최대 5개까지 선택 가능합니다</span>
      </div>

      <div className="w-full h-[250px] mt-[10px] flex flex-col justify-start border-dashed border-2 border-alertColor">
        {interestOptions.length > 0 ? (
          interestOptions.map((item) => (
            <MyInterestItem key={item.interestIdx} data={item} onRemove={handleRemoveInterest} />
          ))
        ) : (
          <div className="p-2 text-xs">
            관심사를 추가하여
            <br />
            달력을 통해 스케줄을 확인해보세요:)
          </div>
        )}
      </div>
    </article>
  );
};

export default MyInterestList;
