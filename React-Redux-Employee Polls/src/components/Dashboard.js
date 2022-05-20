import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import LoginChecker from "./LoginChecker";

const Dashboard = (props) => {
    const {answered, unanswered, users, authedUser} = props;

    return (
        <div className="container home">
            <LoginChecker/>
            <div className="answered-questions">
                    <h3>Unaswered Questions</h3>
                    {
                        unanswered.length 
                            ? unanswered.map(question => (
                            <QuestionPreview key={question.id} id={question.id} question={question} user={users[question.author]}/>
                            ))      
                            : ''
                    }
            </div>
            <div className="unanswered">
                <h3>Answered Questions</h3>
                    {
                        answered.length 
                            ? answered.map(question => (
                            <QuestionPreview key={question.id} id={question.id} question={question} user={users[question.author]}/>
                            )) 
                            : '' 
                    }
            </div>
        </div>
    )
}

function mapStateToProps({authedUser, questions, users}) {
    const questionsList = Object.keys(questions).map(question => questions[question]);
    const answered = questionsList.filter(question => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = questionsList.filter(question => !answered.includes(question)).sort((a, b) => b.timestamp - a.timestamp);
    return {
      questions,
      answered,
      unanswered,
      users
    };
  }
  
  export default connect(mapStateToProps)(Dashboard);