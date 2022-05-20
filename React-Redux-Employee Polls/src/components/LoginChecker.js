import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const LoginChecker = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
        let loggedState = props.loggedState;
        if (loggedState){
            navigate("/", { replace: true });
            console.log("NOT AUTHED")
        } else {
            console.log("AUTHED")
        }
    }, [props.loggedState])
}

function mapStateToProps({authedUser}) {
    return {
      loggedState: (authedUser === null ? true : false),
    };
}

export default connect(mapStateToProps)(LoginChecker);