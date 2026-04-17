import React, { useId } from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  isLoading = false,
  loadingText = 'Loading',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  const loadingId = useId();

  return (
    <button
      type={props.type ?? 'button'}
      className={`btn btn--${variant} ${isLoading ? 'btn--loading' : ''} ${disabled ? 'btn--disabled' : ''}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      aria-describedby={isLoading ? loadingId : undefined}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="btn__loading">
            {loadingText}
            <span className="dots" aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
          <span id={loadingId} className="skip-link">
            Please wait while the action is being processed.
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};