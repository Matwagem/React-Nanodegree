import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import Search from "./Search";
import {Route, Routes, useNavigate} from "react-router-dom"
import ListBooks from "./ListBooks";

function App() {

  const [books, setBooks] = useState([]);

  const options = [
    { value: 'currentlyReading', label: 'Currently Reading' },
    { value: 'read', label: 'Read' },
    { value: 'wantToRead', label: 'Want To Read' },
    { value: 'none', label: 'None' }
  ]

  useEffect(() => {
      const getBooks = async () => {
          const res = await BooksAPI.getAll();
          setBooks(res);
          //Books now contains all books available
      }
      getBooks();
  }, []);

  //edit
  const changeBookShelf = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    .then(() => {
      book.shelf = shelf
      setBooks(books.filter((b) => b.id !== book.id).concat(book))
    })
  };


  return (
    <Routes>
      <Route  exact path="/"  element={<ListBooks books={books} options={options} changeBookShelf={changeBookShelf}/>}/>
      <Route path="/Search" element={<Search books={books} changeBookShelf={changeBookShelf} options={options}/>}/>
    </Routes>
  );
}

export default App;
