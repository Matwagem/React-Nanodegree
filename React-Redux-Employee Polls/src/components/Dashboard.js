import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";
import LoginChecker from "./LoginChecker";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = (props) => {
    const {answered, unanswered, users} = props;

    return (
        <div className="container home">
            <LoginChecker/>
            <Tabs>
                <TabList>
                    <Tab>Unanswered</Tab>
                    <Tab>Answered</Tab>
                </TabList>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
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
                </TabPanel>
            </Tabs>


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
      users,
    };
  }
  
  export default connect(mapStateToProps)(Dashboard);