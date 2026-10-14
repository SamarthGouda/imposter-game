import React, { useEffect } from 'react';
import { playClick } from '../utils/sound';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '460px'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              playClick();
              onClose();
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
