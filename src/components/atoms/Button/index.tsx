// src/component/atoms/Button.tsx
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isSelected?: boolean; // To identify if the tab is selected
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  isSelected = false,
}) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selectedTab : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
