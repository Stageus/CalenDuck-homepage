export const idValueValidation = (value: string) => {
  const regex = /^[a-zA-Z0-9]{4,20}$/;
  if (!regex.test(value)) {
    alert("아이디는 4~20글자로 이루어져야 합니다.");
    return false;
  }
  return true;
};

export const pwValueValidation = (value: string) => {
  const regex = /^[^\s]{8,20}$/;
  if (!regex.test(value)) {
    alert("비밀번호는 8~20글자로 이루어져야 합니다.");
    return false;
  }
  return true;
};

export const emailValueValidation = (value: string) => {
  const regex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value)) {
    alert("올바른 이메일 주소 형식이 아닙니다.");
    return false;
  }
  return true;
};
