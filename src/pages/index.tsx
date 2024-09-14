import Input from "@/components/Input/Input";
import MaterialIcon from "@/components/MaterialIcon/MaterialIcon";
import { useState } from "react";

const IndexPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <Input
        state={[phone, setPhone]}
        label="전화번호"
        placeholder="010 0000 0000"
      />

      <MaterialIcon>token</MaterialIcon>
    </>
  );
};

export default IndexPage;
