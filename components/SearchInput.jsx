export default function SearchInput({
  placeholder = 'Search input...',
  className,
  ...otherProps
}) {
  return (
    <input
      className={`bg-slate-800 shadow shadow-slate-800/30 text-slate-100 placeholder:text-slate-400 px-3 py-2 rounded-md w-full ${className}`}
      type='search'
      placeholder={placeholder}
      {...otherProps}
    />
  );
}
