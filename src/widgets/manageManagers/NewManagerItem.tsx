import React from "react";

import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 관심사 계정 권한 부여 POST api 연결 (/master/users/permission)
const NewManagerItem = () => {
  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="w-[100%] bg-tagColor">
          <tr className="w-[100%] px-[10%] flex justify-between items-center my-[10px]">
            <div className="flex w-[80%]">
              <div className="w-[10%] px-[10px] py-4 flex justify-start items-center">NEW</div>
              <input
                placeholder="닉네임 입력"
                className="flex w-[30%] px-[10px] m-2 justify-start "
              />
              <input
                placeholder="관심사 입력"
                className="flex w-[50%] px-[10px] m-2 justify-start"
              />
            </div>

            <th className="w-[15%] flex justify-between px-[10px]">
              <button>
                <img src={minus} alt="minu" />
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
