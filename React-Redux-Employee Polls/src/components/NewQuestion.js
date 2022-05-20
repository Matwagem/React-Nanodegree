import { connect } from "react-redux"
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router";
import { useState } from "react";
import LoginChecker from "./LoginChecker";

const NewQuestion = ({dispatch, authedUser}) => {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeOptionOne = (e) => {
        const text = e.target.value;
        setOptionOne(text);
    }

    const handleChangeOptionTwo = (e) => {
        const text = e.target.value;
        setOptionTwo(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            dispatch(handleAddQuestion(optionOne, optionTwo))
            setSuccess(true);
            setError(false);
        } catch (e) {
            setSuccess(false);
            setError(false);
        }
        setOptionOne("");
        setOptionTwo("");
        navigate("/")
    };

    return (
        <div className="poll-container">
            <LoginChecker/>
            {success &&
                <h1 className={"Success"} data-testid="success-header">Name Submitted!</h1>
            }
            {error &&
                <h1 className={"Error"} data-testid="error-header">Please enter both options.</h1>
            }
            <h2>Would you rather</h2>
            <p>Create your own poll</p>
            <form name="question-form" className="new-question" onSubmit={handleSubmit}>
                <label className="large-label" htmlFor="optionOneValue">
                    First Choice
                    <input data-testid="option-one-input" placeholder="Option one" onChange={handleChangeOptionOne} value={optionOne} name="optionOneValue"/>
                </label>
                <label className="large-label" htmlFor="optionTwoValue">
                    Second Choice
                    <input data-testid="option-two-input" placeholder="Option two" onChange={handleChangeOptionTwo} value={optionTwo} name="optionTwoValue"/>
                </label>
                <button data-testid="option-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);