import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCard from "./BookCard";

const BookList = () => {
    const { books } = useContext(BooksContext);

    return (
        <div>
            <h2>All Books</h2>
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
};

export default BookList;
