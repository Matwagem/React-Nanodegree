import { Link } from "react-router-dom";
import { useEffect } from "react"
import * as BooksAPI from "./BooksAPI"
import { useState } from "react";
import Select from "react-select";
import Book from "./Book";
import Shelf from "./Shelf";

const ListBooks = ({books, options, changeBookShelf}) => {

    console.log("this is the listbooks component: ")
    console.log(books)

    const filteredBooks = (shelfOption) => {
       return books.filter(book => book.shelf == shelfOption.value)
    }

    // To be used to manage book state and pass to the API
    const [value, setValue] = useState('');

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
                      shelfOption.value != "none"  && 
                        <Shelf key={shelfOption.key} shelfOption={shelfOption} books={filteredBooks(shelfOption)} changeBookShelf={changeBookShelf}/>
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