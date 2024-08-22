import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import plus from "shared/imgs/plus.svg";
import { TInterestItem, TUserItem } from "types";
import GeneralUserItem from "./GeneralUserItem";
import NoManagerInterestItem from "./NoManagerInterestItem";

const NewManagerItem = () => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [interestsList, setInterestsList] = useState<TInterestItem[]>([]);
  const [usersList, setUsersList] = useState<TUserItem[]>([]);
  const [filteredInterests, setFilteredInterests] = useState<TInterestItem[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TUserItem[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [newManagerIdx, setNewManagerIdx] = useState<number>();

  useEffect(() => {
    // 일반 계정 목록 불러오기 GET api 연결 (/master/users)
    const getGeneralUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUsersList(result.list);
        } else if (response.status === 401) {
          console.log("잘못된 인증 정보 제공");
        } else if (response.status === 403) {
          console.log("권한이 없는 사용자의 접근");
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    // 아직 매니저 배정을 받지 않은 관심사 목록 전체 불러오기 GET api  (/master/interests)
    const getNoManagerInterests = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/interests`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.log("잘못된 인증 정보 제공");
          } else if (response.status === 403) {
            console.log("권한이 없는 사용자의 접근");
          }
          return;
        }
        const result = await response.json();
        if (response.status === 200) {
          setInterestsList(result.list);
        }
      } catch (error) {
        console.error("서버 에러: ", error);
      }
    };

    getGeneralUsers();
    getNoManagerInterests();
  }, [cookies.token]);

  // 매니저 배정 POST api 연결 (/master/users/permission)
  const addNewManagerEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/master/users/permission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify({
          userIdx: newManagerIdx,
          interestIdx: interestsList.find((interest) => interest.interestName === selectedInterest)
            ?.interestIdx,
        }),
      });

      if (response.ok) {
        alert("새로운 관리자가 추가되었습니다.");
        navigate("/managerInterests");
      } else if (response.status === 401) {
        console.log("토큰 검증 실패");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 403) {
        console.log("권한이 없는 사용자의 접근");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 404) {
        console.log("존재하지 않는 아이디 추가");
        alert("관리자 추가에 실패하셨습니다.");
      } else if (response.status === 409) {
        alert("다른 관심사를 관리 중인 사용자입니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("관리자 추가 중 오류가 발생했습니다.");
    }
  };

  // 유저 입력 시 필터링
  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInputValue = e.target.value;
    setSelectedUser(userInputValue);

    const filtered = usersList.filter((user) =>
      user.userNickname.toLowerCase().includes(userInputValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // 관심사 입력 시 필터링
  const handleInterestInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSelectedInterest(inputValue);

    const filtered = interestsList.filter((interest) =>
      interest.interestName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredInterests(filtered);
  };

  // 유저 선택 시 호출
  const selectUser = (user: TUserItem) => {
    setSelectedUser(user.userNickname);
    setNewManagerIdx(user.userIdx);
    setFilteredUsers([]); // 선택 후 리스트 닫기
  };

  // 관심사 선택 시 호출
  const selectInterest = (interest: TInterestItem) => {
    setSelectedInterest(interest.interestName);
    setFilteredInterests([]); // 선택 후 리스트 닫기
  };

  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="w-full bg-tagColor">
          <tr className="w-full px-[10%] my-[10px]">
            <th className="w-[10%] px-[10px] py-4">NEW</th>
            <td className="w-[30%] px-[10px] py-4">
              <input
                placeholder="닉네임 입력"
                className="w-full px-[10px] py-2"
                value={selectedUser}
                onChange={handleUserInputChange}
              />
              {filteredUsers && filteredUsers.length > 0 && (
                <div>
                  {filteredUsers.map((elem) => (
                    <GeneralUserItem
                      key={elem.userIdx}
                      data={elem}
                      onClick={() => selectUser(elem)}
                    />
                  ))}
                </div>
              )}
            </td>
            <td className="w-[50%] px-[10px] py-4">
              <input
                placeholder="관심사 입력"
                className="w-full px-[10px] py-2"
                value={selectedInterest}
                onChange={handleInterestInputChange}
              />
              {filteredInterests && filteredInterests.length > 0 && (
                <div>
                  {filteredInterests.map((elem) => (
                    <NoManagerInterestItem
                      key={elem.interestIdx}
                      data={elem}
                      onClick={() => selectInterest(elem)}
                    />
                  ))}
                </div>
              )}
            </td>
            <th className="w-[15%] px-[10px] py-4">
              <button onClick={addNewManagerEvent}>
                <img src={plus} alt="plus" />
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default NewManagerItem;
