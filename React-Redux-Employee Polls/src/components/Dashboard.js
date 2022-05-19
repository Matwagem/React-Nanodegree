import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import { Link } from "react-router-dom";
import QuestionPage from "./QuestionPage";

const Dashboard = (props) => {

    const {answeredQuestions, unansweredQuestions, users} = props;

    return (
        <div className="container home">
            <div className="answered-questions">
                    <h3>Unaswered Questions</h3>
                    {
                        unansweredQuestions.length ? unansweredQuestions.map(question => (
                            <QuestionPreview key={question.id} id={question.id} question={question} user={users[question.author]}/>
                    )) : ''
                    }
            </div>
            <hr/>
            <div className="unanswered">
                <h3>Answered Questions</h3>
                    {
                        answeredQuestions.length ? answeredQuestions.map(question => (
                            <QuestionPreview key={question.id} question={question} user={users[question.author]}/>
                        )) : '' 
                    }
            </div>
            
        </div>
    )
}

function mapStateToProps({authedUser, questions, users}) {
    const compareTime = (a, b) => b.timestamp - a.timestamp;
    const allQuestions = Object.keys(questions).map(question => questions[question]);
    const answeredQuestions = allQuestions
      .filter(question => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
      .sort(compareTime);
    console.log(answeredQuestions);
    const unansweredQuestions = allQuestions
      .filter(question => !answeredQuestions.includes(question))
      .sort(compareTime);
    console.log(unansweredQuestions);
    return {
      allQuestions,
      answeredQuestions,
      unansweredQuestions,
      users
    };
  }
  
  export default connect(mapStateToProps)(Dashboard);