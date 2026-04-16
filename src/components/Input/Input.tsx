import React, { useId } from 'react';
import './Input.scss';

type InputProps = {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  helperText,
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || useId();
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  console.log(fullWidth)

  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`input-label ${required ? 'input-label--required' : ''}`}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`input ${error ? 'input--error' : ''} ${className}`}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      />

      {error ? (
        <span id={errorId} className="input-error" role="alert">
          {error}
        </span>
      ) : (
        helperText && (
          <span id={helperId} className="input-helper">
            {helperText}
          </span>
        )
      )}
    </div>
  );
};