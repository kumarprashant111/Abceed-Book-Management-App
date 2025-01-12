'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './BookDetail.module.css';
import { Book } from '@/Types/types';
import { AppContext, AppContextType } from '@/context/AppContext';

const featureItems = [
  {
    srcLight: '/icons/light/icon_study_quiz.svg',
    srcDark: '/icons/dark/icon_study_quiz.svg',
    alt: 'Quiz',
    label: 'アプリ学習',
  },
  {
    srcLight: '/icons/light/icon_study_sound.svg',
    srcDark: '/icons/dark/icon_study_sound.svg',
    alt: 'Sound',
    label: '音声(無料）',
  },
  {
    srcLight: '/icons/light/icon_study_sw.svg',
    srcDark: '/icons/dark/icon_study_sw.svg',
    alt: 'SW Training',
    label: 'SWトレ',
  },
  {
    srcLight: '/icons/light/icon_study_vocab.svg',
    srcDark: '/icons/dark/icon_study_vocab.svg',
    alt: 'Vocabulary',
    label: '単語一覧',
  },
  {
    srcLight: '/icons/light/icon_study_marksheet.svg',
    srcDark: '/icons/dark/icon_study_marksheet.svg',
    alt: 'Mark Sheet',
    label: 'マークシート',
  },
  {
    srcLight: '/icons/light/icon_study_record.svg',
    srcDark: '/icons/dark/icon_study_record.svg',
    alt: 'Learning Record',
    label: '学習記録',
  },
  {
    srcLight: '/icons/light/icon_study_test.svg',
    srcDark: '/icons/dark/icon_study_test.svg',
    alt: 'Learning Record',
    label: 'テスト',
  },
];

const BookDetail: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params.id;

  const { setLoading, myBooks, toggleBook } = useContext(
    AppContext,
  ) as AppContextType;

  const [bookDetail, setBookDetail] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isBookRegistered = id ? myBooks.has(id) : false;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading?.(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mock/book/all`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books.');
        }
        const data: {
          top_category_list: { sub_category_list: { book_list: Book[] }[] }[];
        } = await response.json();

        const allBooks = data.top_category_list.flatMap((category) =>
          category.sub_category_list.flatMap(
            (subCategory) => subCategory.book_list,
          ),
        );

        const selectedBook = allBooks.find((book) => book.id_book === id);

        if (!selectedBook) {
          throw new Error('Book not found.');
        }

        setBookDetail(selectedBook);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError('Failed to fetch book details.');
      } finally {
        setLoading?.(false);
      }
    };

    if (id) fetchBooks();
  }, [id, setLoading]);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!bookDetail) {
    return null;
  }

  const currentTheme = document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light';
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <span className={styles.backIcon}>&lt;</span> 書籍詳細
        </button>

        <button className={styles.deleteButton}>データ削除</button>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.bookDetailsSection}>
          {/* Book Info */}
          <div className={styles.bookInfoWrapper}>
            <div className={styles.bookCoverImage}>
              <Image
                src={bookDetail.img_url}
                alt={bookDetail.name_book}
                className={styles.bookImage}
                width={120}
                height={180}
                priority
              />
            </div>
            <div className={styles.bookInfo}>
              <h2 className={styles.bookTitle}>{bookDetail.name_book}</h2>
              <p className={styles.bookAuthor}>
                <span>著者</span> {bookDetail.author}
              </p>
              <p className={styles.bookPublisher}>
                <span>出版社</span> {bookDetail.category}
              </p>
              <div className={styles.buttons}>
                <button
                  className={styles.addButton}
                  onClick={() => toggleBook(id!)}
                >
                  {isBookRegistered ? 'MyBooks削除' : 'MyBooks追加'}
                </button>
                <button className={styles.subscriptionButton}>
                  読み放題中
                </button>
              </div>
            </div>
          </div>
          {/* Feature Icons */}
          <div className={styles.featureGrid}>
            {featureItems.map((item, index) => (
              <div className={styles.featureItem} key={index}>
                <Image
                  src={`/icons/${
                    currentTheme === 'dark' ? 'dark' : 'light'
                  }/${item.srcLight.split('/').pop()}`}
                  alt={item.alt}
                  width={40}
                  height={40}
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
