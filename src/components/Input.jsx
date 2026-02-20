export default function Input({ label, ...props }) {
  return (
    <label className="block text-xs text-brand-muted">
      <span>{label}</span>
      <input className="mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none focus:border-brand-primary" {...props} />
    </label>
  );
}
