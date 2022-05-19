import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { formatQuestion } from "../utils/helpers";
import { handleAnswer } from '../actions/questions'

const QuestionPage = (props) => {

    const navigate = useNavigate();
    const question = props.question;
    console.log(question);
    const {name, avatarURL, optionOneText, optionTwoText, hasAnswered} = question;

    if (props.question === null){
        //Potentially write a reject in here
        navigate("/404")
    }

    function handleClick(value) {
        const {dispatch, qid } = props;
        dispatch(handleAnswer(qid, value));
        navigate("/leaderboard")
    }

    return (
        <div className="center choice-div">
            <div>
                <img alt="user-avatar" className="user-avatar" src={avatarURL}/>
                <h3>{name} wants to know</h3>
            </div>
            <div>
                <h4>
                    Would you rather...
                </h4>
                {
                    !(hasAnswered) && <div>
                        <button onClick={() => handleClick('optionOne')}>
                            {optionOneText}
                        </button>
                        <button onClick={() => handleClick('optionTwo')}>
                            {optionTwoText}
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const id = props;
    const question = questions[id];

    return {
        authedUser,
        qid: id,
        question: question
          ? formatQuestion(question, users[question.author], authedUser)
          : null
    };
}

export default connect(mapStateToProps)(QuestionPage);