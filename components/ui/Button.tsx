import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1F3A2E] text-[#F5F1EA] hover:bg-[#111111] active:bg-[#0a0a0a]",
  secondary:
    "border border-[#B8793E] text-[#111111] hover:bg-[#B8793E] hover:text-[#F5F1EA] active:bg-[#9a6535]",
  ghost:
    "text-[#111111] hover:text-[#1F3A2E] underline-offset-4 hover:underline decoration-[#B8793E]",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[10px] tracking-[0.15em]",
  md: "px-7 py-3.5 text-[11px] tracking-[0.12em]",
  lg: "px-10 py-5 text-[11px] tracking-[0.12em]",
};

const base =
  "inline-flex items-center justify-center gap-2.5 font-sans font-medium uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  children,
  external,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
