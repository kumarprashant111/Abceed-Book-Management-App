import React from 'react';
import BookList from '../components/Organisms/BookList.tsx';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BookList />
      </main>
    </div>
  );
}
