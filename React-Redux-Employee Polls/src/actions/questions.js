import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { saveQuestionToUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

//Action creator for receiving the questions
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};

//Action creator for answering a question, including who's answering (authedUser)
export function answerQuestion ({qid, answer, authedUser}) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
    };
};

//Action creator for adding a question
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
};

//TODO: write eventhandlers for this action
export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		})
			.then((question) => dispatch(addQuestion(question)))
            //TODO: associate question with the user
			.then(() => dispatch(hideLoading()));
	};
}


export function handleAnswer (qid, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      return saveQuestionAnswer({
        authedUser,
        qid,
        answer
      })
        .then(() => {
          dispatch(answerQuestion({authedUser, qid, answer}));
          dispatch(saveQuestionToUser({authedUser, qid, answer}));
        })
    }
  }