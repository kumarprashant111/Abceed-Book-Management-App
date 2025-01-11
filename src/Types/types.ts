export interface BookCardProps {
  cover: string; // Image URL
  onDetailsClick: () => void; // Click handler
}

export interface Book {
  id_book: string;
  name_book: string;
  author: string;
  img_url: string;
}

export interface SubCategory {
  name_category: string;
  book_list: Book[];
}

export interface Category {
  name_category: string;
  sub_category_list: SubCategory[];
}
