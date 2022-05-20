import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const LoginChecker = (props) => {
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        const loggedState = props.loggedState;
        if (loggedState){
            navigate("/login", {state:{location: loc.pathname}});
        }
    }, [props.loggedState, loc.pathname, navigate])
}

function mapStateToProps({authedUser}) {
    return {
      loggedState: (authedUser === null ? true : false),
    };
}

export default connect(mapStateToProps)(LoginChecker);