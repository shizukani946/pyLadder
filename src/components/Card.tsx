// Card component

import { HTMLAttributes, forwardRef } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-gray-200 p-6 shadow-sm ${className}`}
        {...props}
      >
        {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";