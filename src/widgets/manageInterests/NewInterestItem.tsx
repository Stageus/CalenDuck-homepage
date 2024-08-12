import React from "react";
import minus from "shared/imgs/minus.svg";
import plus from "shared/imgs/plus.svg";

// 새로운 관심사를 추가하거나 수정하는 컴포넌트
const NewInterestItem = () => {
  return (
    <section className="fixed bottom-[50px] ml-[90px] w-[calc(100vw-500px)]">
      <table className="min-w-full">
        <thead className="bg-tagColor">
          <tr className="w-full">
            <th className="w-[10%] px-[10px] py-4">NEW</th>
            <th className="w-[50%] px-[10px] py-4">
              <input
                placeholder="관심사 입력"
                className="w-full px-[10px] border border-gray-300 rounded"
              />
            </th>
            <th className="w-[15%] flex justify-between px-[10px] py-4">
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

export default NewInterestItem;
