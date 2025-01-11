"use client";
import React, { useEffect, useState } from "react";
import styles from "./BookList.module.css";
import BookCard from "../../molecules/BookCard.tsx"; // Adjust the path as necessary
import { Category } from "@/Types/types";
import Button from "@/components/atoms/Button";

const BookList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mock/book/all`
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
          <Button
            key={category.name_category}
            onClick={() => handleCategoryClick(category.name_category)}
            isSelected={selectedCategory === category.name_category}
          >
            {category.name_category}
          </Button>
        ))}
      </div>

      {/* Displaying the selected category and its books */}
      {selectedCategoryData && (
        <div className={styles.categoryWrapper}>
          {selectedCategoryData.sub_category_list.map((subCategory) => (
            <div key={subCategory.name_category}>
              <h3 className={styles.subCategoryTitle}>
                {subCategory.name_category}
              </h3>
              <div className={styles.bookList}>
                {subCategory.book_list.map((book) => (
                  <BookCard
                    key={book.id_book}
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
