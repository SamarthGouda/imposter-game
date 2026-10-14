import React from 'react';
import { playClick } from '../utils/sound';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  icon = null,
  sound = true,
  type = 'button',
  ...props
}) {
  const handleClick = (e) => {
    if (disabled) return;
    if (sound) playClick();
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(12);
    }
    if (onClick) onClick(e);
  };

  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    disabled ? 'btn-disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
}
