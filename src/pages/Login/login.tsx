import Button from "@/components/Button/Button";
import styles from "./style.module.scss";
import Input from "@/components/Input/Input";
import { useCallback, useState } from "react";
import login from "@/libs/auth/login";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles["login-container"]}>
      <form className={styles.form}>
        <Input
          label="전화번호"
          placeholder="010 0000 0000"
          state={[phone, setPhone]}
        />

        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          visibility
          state={[password, setPassword]}
        />

        <Button label="로그인" onClick={handleLogin} />
      </form>
    </div>
  );
};

export default LoginPage;
