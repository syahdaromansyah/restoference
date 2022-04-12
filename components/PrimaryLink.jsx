import React from 'react';

const PrimaryLink = React.forwardRef(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <a
        className={`inline-block bg-slate-700 shadow shadow-slate-700/30 font-semibold text-slate-100 rounded-md px-4 py-3 transition-colors duration-300 focus:bg-slate-800 hover:bg-slate-800 ${className}`}
        {...otherProps}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

PrimaryLink.displayName = 'PrimaryLink';

export default PrimaryLink;
