import { Link } from "react-router-dom";
import { formatQuestion, formatDate } from "../utils/helpers";
import LoginChecker from "./LoginChecker";

const QuestionPreview = (props) => {
    const {question, user, id, timestamp} = props;
    return (
        <div className="question-preview-container">
            <LoginChecker/>
            <div>
                <img alt="user avatar" className="avatar" src={user.avatarURL}/>
                <span className="author">{user.name}</span>
            </div>
            <div>
                <span className="timestamp">{formatDate(question.timestamp)}</span>
            </div>
            <div>
                <Link to={`../questions/${id}`}>
                    <button>
                        Show
                    </button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const { id } = props.router.params;
    const question = questions[id];

    return {
        authedUser,
        qid: id,
        question: question
          ? formatQuestion(question, users[question.author], authedUser)
          : null
    }
}

export default QuestionPreview;