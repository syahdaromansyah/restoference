export default function TextInput({ className, ...otherProps }) {
  return (
    <input
      className={`bg-slate-800 shadow-md shadow-slate-800/40 text-slate-100 placeholder:text-slate-400 px-3 py-2 rounded-md w-full ${className}`}
      type='text'
      {...otherProps}
    />
  );
}
