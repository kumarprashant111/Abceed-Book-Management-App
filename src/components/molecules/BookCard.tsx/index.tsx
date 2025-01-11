import React from "react";
import Image from "next/image";
import styles from "./BookCard.module.css";
import { BookCardProps } from "@/Types/types";

const BookCard: React.FC<BookCardProps> = ({ cover, onDetailsClick }) => {
  return (
    <div className={styles.card} onClick={onDetailsClick}>
      <Image
        src={cover}
        alt="Book Cover"
        className={styles.bookImage}
        width={100} // Set the desired width
        height={150} // Set the desired height
        style={{
          objectFit: "cover", // Correct way to replace objectFit
          borderRadius: "5px",
        }}
        quality={80} // Optional: optimize image quality
        priority // Optional: preload important images
      />
    </div>
  );
};

export default BookCard;
