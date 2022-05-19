import { Link } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";

const QuestionPreview = (props) => {
    const {question, user, id} = props;
    console.log(question);
    console.log(user);
    console.log(id);
    return (
        <div className="question-preview-container">
            <div>
                <img alt="user avatar" className="avatar" src={user.avatarURL}/>
                <span className="author">{user.name}</span>
            </div>
            <div>
                <Link to={`../questions/${id}`}>
                    Show
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const { id } = props.router.params;

    return {
        id,
    }
}

export default QuestionPreview;