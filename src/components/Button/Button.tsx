import $ from "@/utils/style";
import styles from "./style.module.scss";

interface Props {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "negative" | "disabled";
}

const Button = (props: Props) => {
  return (
    <button
      disabled={props.variant === "disabled"}
      className={$(
        styles["button-container"],
        styles[props.variant ?? "primary"]
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
