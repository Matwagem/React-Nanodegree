import Book
from "./Book";
const Shelf = ({shelfOption, books, changeBookShelf}) => {

    console.log("shelf created")
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfOption.value}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                 {
                    books.map(book => (
                        <li>
                            {console.log(book.shelf)}
                            <Book key={book.id} currBook={book} defaultValues={{value: shelfOption.value, label: shelfOption.label}} changeBookShelf={changeBookShelf}/>
                        </li>
                    )
                    )}
                  </ol>
            </div>
        </div>
    )
}
export default Shelf;