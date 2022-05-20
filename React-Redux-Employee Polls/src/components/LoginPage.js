import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router";

const LoginPage = (props) => {
    const { userIds, users, dispatch } = props;
    const [selectedOption, setSelectedOption] = useState(userIds[0]);
    let navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedOption(e.target.value);
        console.log(e.target.value);
        if(e.target.value !== ""){
            dispatch(setAuthedUser(e.target.value));
            navigate("/home")
        }
    }

    return (
        <div className="vote-container">
            <h3>Please select a user to login</h3>
            <select name="users" value={selectedOption} className="user-dropdown" onChange={handleChange}>
                {userIds.map(id => (
                <option value={id} key={id}>
                    {users[id].name}
                </option>
                ))}
            </select>
       </div>
    )
}

function mapStateToProps(state) {
    const users = state.users
    return {
      userIds: Object.keys(users),
      users
    }
}
  
export default connect(mapStateToProps)(LoginPage)