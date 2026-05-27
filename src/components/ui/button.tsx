import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = BaseButtonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-600 text-white shadow-sm hover:bg-teal-700 focus-visible:ring-teal-600",
  secondary:
    "bg-sky-700 text-white shadow-sm hover:bg-sky-800 focus-visible:ring-sky-700",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-teal-600 hover:text-teal-700 focus-visible:ring-teal-600",
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-slate-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}