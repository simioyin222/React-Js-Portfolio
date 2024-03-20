import React from 'react';
import styles from './modal.module.css'; // Define your modal styles

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;