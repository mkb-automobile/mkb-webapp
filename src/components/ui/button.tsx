import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-secondary-red text-white shadow-medium hover:shadow-large",
        outline: "border border-gray-200 bg-white shadow-soft hover:bg-gray-50",
        ghost: "hover:bg-gray-100",
        orange: "bg-primary-orange text-white shadow-medium hover:shadow-large hover:bg-primary-orange/90",
        "orange-outline": "border border-primary-orange text-primary-orange hover:bg-primary-orange-50",
      },
      size: {
        default: "h-11 px-8 py-3.5",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

