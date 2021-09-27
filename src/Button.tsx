import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;
  /** Which variant look would you like use */
  variant?: 'Primary' | 'Secondary';
}

/** This is a special button!!! */
export const Button = ({ children, variant = 'Primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'Primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
