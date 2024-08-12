import React from "react";
import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 관심사 계정 권한 부여 POST api 연결 (/master/users/permission)
const NewManagerItem = () => {
  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="w-full bg-tagColor">
          <tr className="w-full px-[10%] my-[10px]">
            <th className="w-[10%] px-[10px] py-4 text-left">NEW</th>
            <th className="w-[30%] px-[10px] py-4">
              <input placeholder="닉네임 입력" className="w-full px-[10px] m-2" />
            </th>
            <th className="w-[50%] px-[10px] py-4">
              <input placeholder="관심사 입력" className="w-full px-[10px] m-2" />
            </th>
            <th className="w-[15%] px-[10px] py-4 flex justify-between">
              <button>
                <img src={minus} alt="minus" />
              </button>
              <button>
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
