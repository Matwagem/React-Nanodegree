import { connect } from "react-redux";

const LoginPage = (props) => {
    const { userIds, location } = props;

    return (
        <div className="vote-container">
                <h3>Please select a user to login</h3>
                {userIds.map(id => (
                <div key={id}>
                    {
                    //<User id={id} location={location} />
                    }
                </div>
                ))}
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