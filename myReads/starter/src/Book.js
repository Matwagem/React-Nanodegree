import Select from "react-select";
import { useEffect, useState } from "react";

const Book = ({currBook, changeBookShelf}) => {

    const [state, setState] = useState(currBook.shelf);

    const changeHandler = (e) => {
        setState(e.target.value);
        changeBookShelf(currBook, e.target.value)
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 
                            'url(' + currBook.imageLinks.thumbnail + ')',
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={state} onChange={changeHandler} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{currBook.title}</div>
                {currBook.authors.map(author => (
                <div className="book-authors">{author}</div>
                ))}
            
        </div>
    )
}

export default Book;