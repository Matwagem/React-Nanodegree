import { useEffect, useState } from "react";

const Book = ({currBook, changeBookShelf, shelfBooks}) => {
    //Initial state which allows for 'none' to appear in all search books
    const [state, setState] = useState('none');

    //Change handler that triggers the changeBookShelf method from App and adjusts the state across the app
    const changeHandler = (e) => {
        setState(e.target.value);
        changeBookShelf(currBook, e.target.value)
    }

    //On Book creation we check the status, and either set the State to the current book passed for the main page, or compare it to all shelves for the search page
    useEffect(() => {
        const checkStatus = () => {
           setState(currBook.shelf)
           shelfBooks && shelfBooks.map((sb) => {
               if(currBook.id === sb.id){
                setState(sb.shelf)
               }
           })
        }
        checkStatus();
        return () => {
            //empty
        }
    }, [currBook, shelfBooks]);
  
    //Accounts for missing thumbnail images
    const imageChecker =
        currBook.imageLinks && currBook.imageLinks.thumbnail
            ? currBook.imageLinks.thumbnail
            : "N/A";

    //Return statement accounting for edge-cases, missing titles/authors, or also multiple authors. Default state is set to {state}, which is defined above in the useEffect hook
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 
                            'url(' + imageChecker + ')',
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
                {
                    currBook.authors 
                        ? currBook.authors.map(author => (
                            <div className="book-authors">{author}</div>
                            ))
                        : ""
                        
                }
                
            
        </div>
    )
}

export default Book;