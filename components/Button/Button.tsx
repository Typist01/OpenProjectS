import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Size = "s" | "m" | "l" | "xl" | "xxl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  text?: string;
  dark?: boolean;
};

const sizes = {
  s: styles["small"],
  m: styles["medium"],
  l: styles["large"],
  xl: styles["extra-large"],
  xxl: styles["extra-extra-large"],
};

const getSize = (size: Size) => {
  return sizes[size];
};

const Button = ({
  dark = false,
  size = "m",
  text = "button",
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={`${styles["btn"]} ${dark ? styles["dark"] : null} ${getSize(
          size
        )}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;