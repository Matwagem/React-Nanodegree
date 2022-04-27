import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import Search from "./Search";
import {Route, Routes} from "react-router-dom"
import ListBooks from "./ListBooks";

function App() {

  //Book state throughout the app
  const [books, setBooks] = useState([]);

  //All available shelves, can be expanded and the app should account for this
  const options = [
    { value: 'currentlyReading', label: 'Currently Reading' },
    { value: 'read', label: 'Read' },
    { value: 'wantToRead', label: 'Want To Read' },
    { value: 'none', label: 'None' }
  ]

  //useEffect hook to retrieve all books available async using the BooksAPI getAll() method
  useEffect(() => {
      const getBooks = async () => {
          const res = await BooksAPI.getAll();
          setBooks(res);
          //Books now contains all books available
      }
      getBooks();
  }, []);

  //Bookshelf changes using the update API hook, filtering on books returned, and setting the state
  const changeBookShelf = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    .then(() => {
      book.shelf = shelf
      setBooks(books.filter((b) => b.id !== book.id).concat(book))
    })
  };

  //Using Router to navigate through the App
  return (
    <Routes>
      <Route  exact path="/"  element={<ListBooks books={books} options={options} changeBookShelf={changeBookShelf}/>}/>
      <Route path="/Search" element={<Search books={books} changeBookShelf={changeBookShelf} options={options}/>}/>
    </Routes>
  );
}
export default App;