import React from 'react';
import Image from 'next/image';
import styles from './BookCard.module.css';
import { BookCardProps } from '@/Types/types';

const BookCard: React.FC<BookCardProps> = ({ cover, onDetailsClick }) => {
  return (
    <div className={styles.card} onClick={onDetailsClick}>
      <Image
        src={cover}
        alt="Book Cover"
        width={120} // Matches card width
        height={180} // Matches card height
        style={{
          objectFit: 'cover',
          borderRadius: '5px',
        }}
        quality={80} // Optimize image quality
        priority
      />
    </div>
  );
};

export default BookCard;
