import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div {...props} className={`w-full max-w-7xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}
