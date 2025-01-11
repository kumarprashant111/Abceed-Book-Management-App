import React from "react";
import BookCover from "../../atoms/BookCover";
import Button from "../../atoms/Button";

type BookCardProps = {
  title: string;
  author: string;
  cover: string;
  onDetailsClick: () => void;
};

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  cover,
  onDetailsClick,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <BookCover src={cover} alt={title} />
      <h3>{title}</h3>
      <p>by {author}</p>
      <Button text="View Details" onClick={onDetailsClick} />
    </div>
  );
};

export default BookCard;
