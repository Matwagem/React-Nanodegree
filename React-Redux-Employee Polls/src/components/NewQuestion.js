import { connect } from "react-redux"
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router";
import { useState } from "react";

const NewQuestion = ({dispatch, authedUser}) => {

    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

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
        dispatch(handleAddQuestion(optionOne, optionTwo));
        setOptionOne("");
        setOptionTwo("");
        navigate("/home")
    };

    return (
        <div className="poll-container">
            <h2>Would you rather</h2>
            <p>Create your own poll</p>
            <form className="new-question" onSubmit={handleSubmit}>
                <label className="large-label" htmlFor="optionOneValue">
                    First Choice
                    <input placeholder="Option one" onChange={handleChangeOptionOne} value={optionOne} name="optionOneValue"/>
                </label>
                <label className="large-label" htmlFor="optionTwoValue">
                    Second Choice
                    <input placeholder="Option two" onChange={handleChangeOptionTwo} value={optionTwo} name="optionTwoValue"/>
                </label>
                <button type="submit">
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