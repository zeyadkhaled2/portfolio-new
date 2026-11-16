const variants = {
  primary:
    "border border-ink/80 bg-canvas text-ink hover:border-accent hover:text-accent",
  accent:
    "border border-accent bg-accent text-accent-ink hover:bg-accent-hover hover:border-accent-hover",
  outline:
    "border border-line bg-transparent text-ink-muted hover:border-ink/60 hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={`pill-shine inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-base font-medium tracking-[0.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
