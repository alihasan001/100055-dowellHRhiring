import {SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_START} from './Type'
const initialState = {
    Log : false,
    loading : false
}

const SignUpReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case SIGNUP_START:
            return{ ...state , loading : true }

        case SIGNUP_SUCCESS:
            console.log(action.type)
            return {...state,loading : false, log:true}


        case SIGNUP_FAILURE:
            return {...state,loading : false, log:false}

        default: return state
    }

}

export default SignUpReducer