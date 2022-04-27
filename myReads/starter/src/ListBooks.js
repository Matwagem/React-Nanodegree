import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const ListBooks = ({books, options, changeBookShelf}) => {
    //Method that returns the filtered book for the current shelf that's being mapped
    const filteredBooks = (shelfOption) => {
       return books.filter(book => book.shelf === shelfOption.value)
    }

    //Return statement looking through shelfOptions passed as param above. It's passing the key, shelfOption selected, filtered books for that shelf, and the changeBookShelf method from App
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <span>An app for the Udacity Nanodegree in React Development.</span>
          </div>
          <div className="list-books-content">
            <div>
              {
                  options.map(shelfOption => (
                      shelfOption.value !== "none"  && 
                        <Shelf key={shelfOption.value} shelfOption={shelfOption} books={filteredBooks(shelfOption)} changeBookShelf={changeBookShelf}/>
                  ))
              }
            </div>
          </div>
          <Link to="/search" className="open-search">
            Add a book
          </Link>
        </div>
    )
}
export default ListBooks;