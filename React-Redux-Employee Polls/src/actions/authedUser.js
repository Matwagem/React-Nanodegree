export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

//Action creator to set the current authenticated user
export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

//Action creator to logout the current authedUser
export function logoutAuthedUser(){
    return {
        type: LOGOUT_AUTHED_USER,
     
    }
}