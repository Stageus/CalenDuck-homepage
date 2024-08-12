import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// 회원탈퇴 DELETE api 연결 (/users)
const DeleteAccountItem = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);

  const deleteAccountEvent = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/users/pw`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });
      if (response.ok) {
        alert("회원 탈퇴에 성공하셨습니다.");
        removeCookie("token", { path: "/" });
        navigate("/");
      } else {
        alert("회원 탈퇴에 실패하셨습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원 탈퇴 중 오류가 발생했습니다.");
    }
  };

  return (
    <button
      onClick={deleteAccountEvent}
      className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor"
    >
      탈퇴하기
    </button>
  );
};

export default DeleteAccountItem;
