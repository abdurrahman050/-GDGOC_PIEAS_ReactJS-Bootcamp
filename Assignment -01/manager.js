
import Books from "./books.js";


const highRatedBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
console.log("Books with rating higher than 4.5:", highRatedBooks);


const printBookDetails = Books.map(({ title, author, rating, genre }) => 
    console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`)
);

const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
console.log("Fiction Books:", fictionBooks);

const bookAuthors = Books.map(book => book.author);
console.log("Authors:", bookAuthors);


console.log(printBookDetails);
