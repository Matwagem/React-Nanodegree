import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import LoginChecker from "./LoginChecker";

const QuestionPreview = (props) => {
    const {question, user, id} = props;
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

export default QuestionPreview;