import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const FlyInStyles = cva(["opacity-0", "durtion-500"], {
  variants: {
    from: {
      top: "translate-y-10 fly-in-from-top",
      bottom: "-translate-y-10 fly-in-from-bottom",
      left: "-translate-x-10 fly-in-from-left",
      right: "translatex-10 fly-in-from-right",
    },
  },
});

type FlyInProps = ComponentProps<"div"> & VariantProps<typeof FlyInStyles>;

const FlyIn = forwardRef<HTMLDivElement, FlyInProps>(
  ({ className, children, from, ...props }, ref) => {
    const style = FlyInStyles({ from, className });
    return (
      <div {...props} ref={ref} className={cn(style)}>
        {children}
      </div>
    );
  }
);

FlyIn.displayName = "FlyIn";
export default FlyIn;
