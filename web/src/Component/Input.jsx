import { forwardRef } from "react";

export const Input = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={` text-white bg-dgray-500 py-1 px-2 border border-dgray-400 focus:border-blue-500 outline-none rounded w-full ${className}`}
      {...rest}
    />
  );
});
