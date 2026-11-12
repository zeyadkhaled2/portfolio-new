const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  outline: "text-ink ring-1 ring-line hover:bg-surface-strong",
};

export default function Button({ href, children, variant = "primary", ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </a>
  );
}
