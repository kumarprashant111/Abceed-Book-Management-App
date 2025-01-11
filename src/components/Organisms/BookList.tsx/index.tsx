"use client";
import React, { useEffect, useState } from "react";
import styles from "./BookList.module.css";
import BookCard from "../../molecules/BookCard.tsx"; // Adjust the path as necessary

type Book = {
  id_book: string;
  name_book: string;
  author: string;
  img_url: string;
};

type SubCategory = {
  name_category: string;
  book_list: Book[];
};

type Category = {
  name_category: string;
  sub_category_list: SubCategory[];
};

const BookList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://dev-app-api.abceed.com/mock/book/all`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories.");
        }
        const data = await response.json();
        setCategories(data?.top_category_list || []);
        setSelectedCategory(
          data?.top_category_list?.[0]?.name_category || null
        );
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const selectedCategoryData = categories.find(
    (category) => category.name_category === selectedCategory
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Books</h1>
      </header>
      {error && <p className={styles.error}>{error}</p>}

      {/* Tab Navigation */}
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category.name_category}
            className={`${styles.tab} ${
              selectedCategory === category.name_category
                ? styles.selectedTab
                : ""
            }`}
            onClick={() => handleCategoryClick(category.name_category)}
          >
            {category.name_category}
          </button>
        ))}
      </div>

      {/* Displaying the selected category and its books */}
      {selectedCategoryData && (
        <div className={styles.categoryWrapper}>
          <h2>{selectedCategoryData.name_category}</h2>
          {selectedCategoryData.sub_category_list.map((subCategory) => (
            <div key={subCategory.name_category}>
              <h3 className={styles.subCategoryTitle}>
                {subCategory.name_category}
              </h3>
              <div className={styles.bookList}>
                {subCategory.book_list.map((book) => (
                  <BookCard
                    key={book.id_book}
                    title={book.name_book}
                    author={book.author}
                    cover={book.img_url}
                    onDetailsClick={() =>
                      console.log(`View details for ${book.name_book}`)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
