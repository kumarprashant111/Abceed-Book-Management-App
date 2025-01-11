import React from "react";
import styles from "./BookCard.module.css";

type BookCardProps = {
  cover: string; // Image URL
  onDetailsClick: () => void; // Click handler
};

const BookCard: React.FC<BookCardProps> = ({ cover, onDetailsClick }) => {
  return (
    <div className={styles.card} onClick={onDetailsClick}>
      <img src={cover} alt="Book Cover" className={styles.bookImage} />
    </div>
  );
};

export default BookCard;
