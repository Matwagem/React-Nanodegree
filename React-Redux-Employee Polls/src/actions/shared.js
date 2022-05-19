import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

//Action to get the initial data
export function handleInitialData(){
    return(dispatch)=>{
        dispatch(showLoading());
        return getInitialData().then(({users, questions})=>{
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}