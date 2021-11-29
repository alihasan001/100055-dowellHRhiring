import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_START, LOGOUT} from './Type'
export const startLogin = () =>{
    return {
        type: LOGIN_START
    }
}
export const LogInSuccess = (payload) =>{
    console.log(payload)
    return{
        type : LOGIN_SUCCESS,
        data:payload
    }
}
export const LogInFailure = (payload) =>{
    // console.log(ndata)
    return{
        type : LOGIN_FAILURE,
        data:payload
    }
}

export const LogOut = () => {
    return{
        type : LOGOUT,
    }
}

