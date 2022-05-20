import { connect } from "react-redux";
import LoginChecker from "./LoginChecker";

const Leaderboard = (props) => {
    const { users } = props;
    const sortedUsers = users.sort( (a, b) => b.totalScore - a.totalScore);

    return (
        <div>
            <LoginChecker/>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Answers</th>
                        <th>Questions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <img alt="avatar" className="avatar" src={`${user.avatarURL}`}/>
                                <span>{user.name}</span>
                            </td>
                            <td>
                                <span>{Object.keys(user.answers).length}</span>
                            </td>
                            <td>
                                <span>{user.questions.length}</span>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

function mapStateToProps({ users }) {
    const usersList = Object.values(users)
    usersList.map( (user) => user.totalScore = Object.keys(user.answers).length + user.questions.length )
    return {
        users: usersList
    }
}

export default connect(mapStateToProps)(Leaderboard);