import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
    const { user, authedUser, dispatch } = props;
    const avatar = user ? user.avatarURL : '';
    const name = user ? user.name : '';

    const handleClick = () =>{
        dispatch(logoutAuthedUser());
    }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/home">Home</Link> 
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link> 
                </li>
                <li>
                    <Link to="/add">Add Question</Link> 
                </li>
                {
                    authedUser
                    && <li className="user-info">  
                            <div className="nav-user">
                                <img
                                src={avatar}
                                alt={`Avatar of ${authedUser}`}
                                className='nav-avatar'
                                />
                                <span>{name}</span> 
                            </div>
                        </li>
                }
                <li>
                    {
                        authedUser 
                            ?   <div onClick={handleClick} className='logout-div'>
                                    <span>Logout</span>
                                </div>
                            :   <Link to='/' exact activeClassName='active'>
                                    <span>Login</span>
                                </Link>
                    }
                    
                </li>
            </ul>
        </nav>
    )
}

function mapStateToProps( { authedUser, users }) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav);