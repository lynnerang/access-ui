import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${variant} ${isLoading ? 'btn--loading' : ''} ${disabled ? 'btn--disabled' : ''}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="btn__loading">
          Loading<span className="dots" aria-hidden="true"></span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};