import clsx from "clsx";
import * as React from "react";
import { Spinner } from "../Spinner";


const variants = {
  primary: "border-blue-600 text-blue-900",
  secondary: "border-yellow-600 text-yellow-900",
  contrast: "border-black-600 text-balck-900",
  danger: "border-red-600 text-red-900"
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};


type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps; 


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      ...props      
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={!!isLoading}
        className={clsx(
          "font-medium border-2 border-b-4 border-r-4 border-black rounded-lg hover:shadow-md",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size={size} />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span>
        {!isLoading && endIcon}
      </button>
    )
  }
)