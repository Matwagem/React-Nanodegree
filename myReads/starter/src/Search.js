import {useState} from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI"
import Book from "./Book";

const Search = ({books, options, changeBookShelf}) => {
    //Defining the initial state, and setter functionality for query
    const [query, setQuery] = useState('');
    const [searchBooks, setBooks] = useState([]);
    const [searchError, setSearchError] = useState(false);

    //Updates the query using the event that's been passed from the input element. BooksAPI search() is used to return a list of books relevant to the query, and set the State.
    const updateQuery = (event) => {
      const query = event.target.value;
      setSearchError(false);
      setQuery(query);
      if(query !== ""){
        BooksAPI.search(query).then(books =>{
          //Checking whether books returned anything, otherwise fill in empty array
          console.log(books);
          if(books.length > 0){
            setBooks(books);
            setSearchError(false);
          } else {
            setBooks([]);
            setSearchError(true);
          }
            console.log(searchError);
        })
      } else {
        //account for edge-case which caused undefined errors
        setBooks([]);
      }
    }

    //Return statement including a map on all the returned searchBooks, creating Book components, passing the key/currentbook/all books on the shelves at the moment/change method
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
            query && searchBooks.map(book => (
              <li key={book.id}>
                  <Book key={book.id} currBook={book} shelfBooks={books} changeBookShelf={changeBookShelf}/>
              </li>
            ))
            }
            </ol>
            {
              searchError ? <div><p>Sorry, no results have been found.</p><button onClick={updateQuery}>Clear Query, and try again!</button></div>: ""
            }
            {
              query === "" ? <div><p>Try search for your favourite book!</p></div> : ""
            }
          </div>
        </div>
    )
}
export default Search;