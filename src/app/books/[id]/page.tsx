"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./BookDetail.module.css";
import { Book } from "@/Types/types";

const BookDetail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mock/book/all`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books.");
        }
        const data: {
          top_category_list: { sub_category_list: { book_list: Book[] }[] }[];
        } = await response.json();

        const allBooks = data.top_category_list.flatMap((category) =>
          category.sub_category_list.flatMap(
            (subCategory) => subCategory.book_list
          )
        );

        const selectedBook = allBooks.find((book) => book.id_book === id);

        if (!selectedBook) {
          throw new Error("Book not found.");
        }

        setBookDetail(selectedBook);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch book details.");
      }
    };

    if (id) fetchBooks();
  }, [id]);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!bookDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          &larr; Back
        </button>
        <button className={styles.deleteButton}>Delete Data</button>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.bookDetailsSection}>
          {/* Book Info */}
          <div className={styles.bookInfoWrapper}>
            <Image
              src={bookDetail.img_url}
              alt={bookDetail.name_book}
              className={styles.bookImage}
              width={120}
              height={180}
              priority // This optimizes the image for LCP
              style={{ objectFit: "cover" }} // Use style to replace objectFit
            />
            <div className={styles.bookInfo}>
              <h2 className={styles.bookTitle}>{bookDetail.name_book}</h2>
              <p className={styles.bookAuthor}>
                <strong>Author:</strong> {bookDetail.author}
              </p>
              <p className={styles.bookPublisher}>
                <strong>Publisher:</strong> {bookDetail.category}
              </p>
              <div className={styles.buttons}>
                <button className={styles.addButton}>MyBooks Add</button>
                <button className={styles.subscriptionButton}>
                  Reading Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_quiz.svg"
                alt="Quiz"
                width={40}
                height={40}
              />
              <p>Quiz</p>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_sound.svg"
                alt="Sound"
                width={40}
                height={40}
              />
              <p>Sound</p>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_sw.svg"
                alt="SW Training"
                width={40}
                height={40}
              />
              <p>SW Training</p>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_vocab.svg"
                alt="Vocabulary"
                width={40}
                height={40}
              />
              <p>Vocabulary</p>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_marksheet.svg"
                alt="Mark Sheet"
                width={40}
                height={40}
              />
              <p>Mark Sheet</p>
            </div>
            <div className={styles.featureItem}>
              <Image
                src="/icons/icon_study_record.svg"
                alt="Learning Record"
                width={40}
                height={40}
              />
              <p>01:36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
