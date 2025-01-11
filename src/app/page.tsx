import React from "react";
import BookList from "../components/Organisms/BookList.tsx"; // Adjust the path if necessary
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Book Management App</h1>
        <BookList /> {/* Add your BookList component here */}
      </main>
    </div>
  );
}
