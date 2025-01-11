import React from "react";
import BookList from "../Organisms/BookList.tsx";

const MainTemplate: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <BookList />
    </div>
  );
};

export default MainTemplate;
