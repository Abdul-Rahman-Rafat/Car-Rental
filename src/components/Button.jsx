export default function Button({ children, className = '', ...props }) {
  return (
    <button className={`rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primaryDark ${className}`} {...props}>
      {children}
    </button>
  );
}
