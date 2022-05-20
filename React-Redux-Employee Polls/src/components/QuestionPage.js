import { connect } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router";
import { formatQuestion } from "../utils/helpers";
import { handleAnswer } from '../actions/questions';
import LoginChecker from "./LoginChecker";
import { Link } from "react-router-dom";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
    return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
    const navigate = useNavigate();
    const question = props.question;

    if (question === null) {
        return (
          <div className='question-not-found'>
            <p>This question does not exist!</p>
            <Link to={"/"}><button>Login</button></Link>
          </div>
        );
    }

    const {name, avatarURL, optionOneText, optionTwoText, hasAnswered, selectedVote, totalVotes, percentageOptionOne, percentageOptionTwo} = question;

    function handleClick(value) {
        const {dispatch, qid } = props;
        dispatch(handleAnswer(qid, value));
        navigate("/leaderboard")
    }

    return (
        <div className="center choice-div">
            <LoginChecker/>
            <div>
                <img alt="user-avatar" className="user-avatar" src={avatarURL}/>
                <h3>{name} wants to know</h3>
            </div>
            <div>
                <h4>
                    Would you rather...
                </h4>
                {
                    !(hasAnswered) 
                                ?   <div>
                                        <button onClick={() => handleClick('optionOne')}>
                                            {optionOneText}
                                        </button>
                                        <button onClick={() => handleClick('optionTwo')}>
                                            {optionTwoText}
                                        </button>
                                    </div>
                                :   <div className="answered-question">
                                        <span>You have already answered this question.</span>
                                        <button disabled>{selectedVote}</button>
                                        <hr/>
                                        <h4>Current vote split: </h4>
                                        <div className="percentage-container">
                                            <div className="percentage-card">
                                                <button name="optionOneButton" className="options">{optionOneText}</button>
                                                <span>{percentageOptionOne}%</span>
                                            </div>
                                            <div className="percentage-card">
                                                <button name="optionTwoButton" className="options">{optionTwoText}</button>
                                                <span>{percentageOptionTwo}%</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <span>Total votes: </span>
                                        <div className="percentage-container">
                                            <span>{totalVotes}</span>
                                        </div>
                                    </div>
                }
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const {id} = props.router.params;
    const question = questions[id];

    return {
        authedUser,
        qid: id,
        question: question
          ? formatQuestion(question, users[question.author], authedUser)
          : null
    };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));