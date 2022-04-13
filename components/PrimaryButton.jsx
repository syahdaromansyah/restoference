export default function PrimaryLink({ children, className, ...otherProps }) {
  return (
    <button
      className={`inline-block bg-slate-800 shadow shadow-slate-800/30 font-semibold text-slate-100 px-4 py-3 rounded-md transition-colors duration-300 focus:bg-slate-900 hover:bg-slate-900 disabled:bg-slate-900 disabled:text-slate-600 ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
