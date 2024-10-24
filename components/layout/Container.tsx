import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div {...props} className={`w-full px-5 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}
