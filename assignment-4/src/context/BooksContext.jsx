import React, { createContext, useState } from "react";

// Create Context
export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ borrowedBooks, favBooks, setBorrowedBooks, setFavBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
