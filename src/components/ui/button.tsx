import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-xs font-medium tracking-[0.16em] uppercase transition-[transform,background-color,color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40",
  {
    variants: {
      variant: {
        gold: "bg-paper text-ink hover:bg-bone-2",
        red: "bg-red text-paper hover:bg-red-2",
        ghost: "bg-transparent text-current underline decoration-red/70 underline-offset-4",
        bone: "bg-paper text-ink hover:bg-bone-2",
        ink: "bg-ink text-paper hover:bg-ink-3",
      },
      size: {
        sm: "h-11 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-8",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
