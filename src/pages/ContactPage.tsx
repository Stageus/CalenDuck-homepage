import React, { useEffect, useState } from "react";
import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import DropDownItem from "shared/components/DropDownItem";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { TCategoryItem } from "types";

const ContactPage = () => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [contactOptions, setContactOptions] = useState<{ label: string; value: string }[]>([]);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<string>("");

  useEffect(() => {
    // 문의 카테고리 목록 불러오기 GET api 연결 (/asks/category)
    const getContactOptions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/asks/category`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        const result = await response.json();
        if (response.status === 200) {
          const options = result.list.map((item: TCategoryItem) => ({
            label: item.name,
            value: item.categoryIdx.toString(),
          }));
          setContactOptions(options);
          setSelectedCategoryIdx(options[0].value); // 첫 번째 옵션을 기본 선택
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };
    getContactOptions();
  }, [cookies.token]);

  const handleContactChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryIdx(e.target.value);
  };

  // 문의 작성 POST api 연결 (/asks)
  const submitRequest = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/asks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          categoryIdx: parseInt(selectedCategoryIdx, 10),
          askTitle: title,
          askContents: contents,
        }),
      });

      if (response.ok) {
        alert("문의가 정상적으로 접수되었습니다.");
        navigate("/main");
      } else if (response.status === 400) {
        console.log("정규식 위반");
        alert("글자수 제한에 유의해주세요.");
      } else if (response.status === 401) {
        console.log("잘못된 인증 정보 제공");
        alert("문의 접수에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("문의 접수 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <HeaderSidebarContainer />
      <section className="mt-[70px] w-full">
        <h1 className="font-bold text-xl my-5">[ 1:1 문의 ]</h1>

        <article className="flex w-full justify-between items-center mt-7 mb-2">
          <h2 className="font-bold text-l mr-5">문의 유형</h2>
          <div className="border border-black w-[90%] h-[50px] flex justify-start p-[10px]">
            <DropDownItem
              options={contactOptions}
              value={selectedCategoryIdx}
              onChange={handleContactChange}
            />
          </div>
        </article>

        {selectedCategoryIdx === "1" && (
          <span className="text-alertColor my-[30px]">
            ️※ 관심사 추가 요청이 수락될 경우, <br />
            해당 관심사에 대한 관리자가 되어 관련 스케줄에 대한 기입, 수정, 삭제 등의 책임을 지니게
            됩니다.
          </span>
        )}

        <article className="flex w-full justify-between items-center mt-7 mb-5">
          <h2 className="font-bold text-l mr-5">문의 제목</h2>
          <input
            placeholder="50 글자 제한"
            maxLength={50}
            className="border border-black w-[90%] h-[50px] p-[10px]"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </article>

        <article className="flex w-full justify-between items-center mt-7 mb-2">
          <h2 className="font-bold text-l mr-5">문의 내용</h2>
          <textarea
            placeholder="300 글자 제한"
            maxLength={300}
            className="border border-black w-[90%] h-[300px] p-[10px]"
            onChange={(e) => setContents(e.target.value)}
          />
        </article>

        <div className="w-full flex justify-end mt-7">
          <button
            onClick={submitRequest}
            className="bg-subColor text-sm w-[80px] py-[3px] rounded-[5px]"
          >
            작성완료
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
