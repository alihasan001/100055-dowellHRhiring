import {SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_START} from './Type'
export const startSignUp = () =>{
    return {
        type: SIGNUP_START
    }
}
export const SignUpSuccess = (payload) =>{
    // console.log(ndata)
    return{
        type : SIGNUP_SUCCESS,
        data:payload
    }
}
export const SignUpFailure = (payload) =>{
    // console.log(ndata)
    return{
        type : SIGNUP_FAILURE,
        data:payload
    }
}