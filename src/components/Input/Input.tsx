import { useCallback, useReducer } from "react";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import styles from "./style.module.scss";

export interface Props {
  label: string;
  placeholder?: string;
  visibility?: boolean;
  state: [string, (value: string) => void];
}

const Input = (props: Props) => {
  const [value, setValue] = props.state;
  const [visibility, toggleVisibility] = useReducer((prev) => !prev, false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <div className={styles.inputContainer}>
      <p>{props.label}</p>

      <div className={styles.inputWrapper}>
        <input
          type={!visibility && props.visibility ? "password" : "text"}
          placeholder={props.placeholder}
          value={value}
          onChange={handleChange}
        />

        {props.visibility && (
          <button type="button" onClick={toggleVisibility}>
            <MaterialIcon>
              {visibility ? "visibility_off" : "visibility"}
            </MaterialIcon>
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
