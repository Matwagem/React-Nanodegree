import Book
from "./Book";
const Shelf = ({shelfOption, books, changeBookShelf}) => {
    //Return statement mapping all the books to the relevant shelf using shelfOption, books, and the change method from App
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfOption.label}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                 {
                    books.map(book => (
                        <li key={book.id}>
                            <Book key={book.id} currBook={book} defaultValues={{value: shelfOption.value, label: shelfOption.label}} changeBookShelf={changeBookShelf}/>
                        </li>
                    ))
                }
                </ol>
            </div>
        </div>
    )
}
export default Shelf;