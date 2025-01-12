'use client';

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

interface AppContextProps {
  children: ReactNode;
}

export interface AppContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  myBooks: Set<string>;
  toggleBook: (id: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppContextProps) => {
  const [loading, setLoading] = useState(false);
  const [myBooks, setMyBooks] = useState<Set<string>>(new Set());

  const toggleBook = (id: string) => {
    setMyBooks((prevBooks) => {
      const updatedBooks = new Set(prevBooks);
      if (updatedBooks.has(id)) {
        updatedBooks.delete(id);
      } else {
        updatedBooks.add(id);
      }
      return updatedBooks;
    });
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        myBooks,
        toggleBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
