import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = ({dispatch, id}) => {
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const text = e.target.value;
        setText(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddTweet(text, id));
        setText("");
        if(!id){
            navigate("/")
        } else {
            //DO NOTHING, Customer already on tweet page, re-renders with new tweet
        }
    };

    const tweetLeft = 280 - text.length;

    return (
        <div>
            <h3 className="center">Compose new Tweet</h3>
            <form className="new-tweet" onSubmit={handleSubmit}>
                {/* TODO: Redirect to / once submitted */}
                <textarea 
                    className="textarea" 
                    maxLength={280} 
                    placeholder="What's happening?" 
                    value={text} 
                    onChange={handleChange}/>
                {
                    tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>
                }
                <button className="btn" type="submit" disabled={text === ""}>Submit</button>
            </form>
        </div>
    )
};

export default connect()(NewTweet);