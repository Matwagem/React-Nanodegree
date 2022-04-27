import {useState} from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI"
import Book from "./Book";
import Shelf from "./Shelf";

const Search = ({books, options, changeBookShelf}) => {

    //Defining the initial state, and setter functionality for query
    const [query, setQuery] = useState('');
    const [searchBooks, setBooks] = useState([]);
    const [searchError, setSearchError] = 'false';

    const updateQuery = (event) => {
      const query = event.target.value
      setQuery(query);
      if(query != ""){
        BooksAPI.search(query).then(books =>{
          console.log(books)
          books.length > 0
            ? setBooks(books)
            : setBooks([])
        })
      } else {
        setBooks([])
      }
    }

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {

             searchBooks.map(book => (
              <li>
                  <Book key={book.id} currBook={book} shelfBooks={books} changeBookShelf={changeBookShelf}/>
              </li>
            )
            )

            }
            </ol>
          </div>
        </div>
    )
}

export default Search;