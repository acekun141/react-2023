import * as React from "react";
import { PulseLoader } from "react-spinners";

const sizes = {
  sm: { size: 5, margin: 2 },
  md: { size: 10, margin: 3 },
  lg: { size: 15, margin: 5 },
}

const speedValues = {
  slow: 0.5,
  normal: 1.25,
  fast: 1.75
}

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizes;
  speed?: keyof typeof speedValues;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", speed = "normal", ...props }, ref) => {
    return (
      <div className="flex items-center" {...props} ref={ref}>
        <PulseLoader
          color={"#ffffff"}
          size={sizes[size].size}
          margin={sizes[size].margin}
          speedMultiplier={speedValues[speed]}
        />
      </div>
    )
  }
);