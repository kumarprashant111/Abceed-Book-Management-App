import React from "react";

type BookCoverProps = {
  src: string;
  alt: string;
};

const BookCover: React.FC<BookCoverProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} style={{ width: "100px", height: "150px" }} />
  );
};

export default BookCover;
