import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../layout/Nav.css';

const Nav = (props) => {
    const { user, authedUser } = props;
    const avatar = user ? user.avatarURL : '';
    const name = user ? user.name : '';

    console.log(props);

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
                    <Link to='/' exact activeClassName='active'>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

function mapStateToProps( { authedUser, users}, props) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav);