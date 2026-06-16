import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/common/icons";

type Variant = "solid" | "outline" | "soft" | "ghost";
type Size = "sm" | "md" | "lg";

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
  /** Accessible label when children are visually terse. */
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid: "bg-[#25D366] text-white hover:bg-[#1eb858]",
  outline:
    "border border-[#25D366]/40 text-[#0d7a3d] hover:bg-[#25D366]/10 dark:text-[#25D366]",
  soft: "bg-mint text-mint-foreground hover:bg-mint/70",
  ghost: "text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3.5 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const iconSizes: Record<Size, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-[18px]",
};

export function WhatsAppButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  showIcon = true,
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {showIcon && <WhatsAppIcon className={iconSizes[size]} />}
      {children}
    </a>
  );
}
