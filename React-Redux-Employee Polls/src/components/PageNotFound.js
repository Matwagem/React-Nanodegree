import { Link } from "react-router-dom";

const PageNotFound = (props) => {
    return(
        <div>
            <p>404: No page was found, log in and redirect to home</p>
            <Link to={"/login"}><button>Login</button></Link>
        </div>
    )
}

export default PageNotFound;