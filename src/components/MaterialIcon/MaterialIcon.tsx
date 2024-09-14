import { PropsWithChildren } from "react";
import styles from "./style.module.scss";
import $ from "@/utils/style";

interface Props extends PropsWithChildren {
  size?: "small" | "medium" | "large" | "x-large";
  color?: string;
}

const MaterialIcon = (props: Props) => {
  return (
    <span
      style={{
        color: props.color ?? "var(--text-status-unselected)",
      }}
      className={$(styles["material-icons"], styles[props.size ?? "medium"])}
    >
      {props.children}
    </span>
  );
};

export default MaterialIcon;
