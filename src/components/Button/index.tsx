import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classnames from "classnames";
import styled from "./styles.module.scss";

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className"
> & {
  title?: string;
  fullWidth?: boolean;
  variant?: "button-buy" | "button-dark" | "button-light";
  size?: "small" | "medium" | "large";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  positionIcon?: "left" | "right";
};

export const Button = ({
  title,
  fullWidth = false,
  variant = "button-buy",
  size = "small",
  icon,
  positionIcon = "left",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classnames(
        `${styled.button}
         ${styled[variant]}
         ${styled[size]}
         ${fullWidth ? styled.fullWidth : ""}`
      )}
    >
      <>
        {!!icon && positionIcon === "left" && icon} {!!title && title}{" "}
        {!!icon && positionIcon === "right" && icon}
      </>
    </button>
  );
};
