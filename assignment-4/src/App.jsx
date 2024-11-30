import React from "react";
import BookList from "./components/BookList";
import BorrowedBooks from "./components/BorrowedBooks";
import FavBooks from "./components/FavBooks";

const App = () => {
    return (
        <div>
            <h1>Library Manager</h1>
            <BookList />
            <BorrowedBooks />
            <FavBooks />
        </div>
    );
};

export default App;
