import React from 'react';

const SecondaryLink = React.forwardRef(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <a
        className={`inline-block border-2 border-slate-700 font-semibold text-slate-700 rounded-md px-4 py-3 transition-colors duration-300 focus:bg-slate-800 focus:border-slate-800 focus:text-slate-100 hover:bg-slate-800 hover:border-slate-800 hover:text-slate-100 ${className}`}
        {...otherProps}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

SecondaryLink.displayName = 'SecondaryLink';

export default SecondaryLink;
