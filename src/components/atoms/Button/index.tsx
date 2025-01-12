// src/component/atoms/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isSelected?: boolean; // For tabs
  variant?: 'primary' | 'secondary'; // For button types
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  isSelected = false,
  variant = 'secondary', // Default to secondary
}) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selectedTab : ''} ${
        variant === 'primary' ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
