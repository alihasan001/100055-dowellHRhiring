import {LOGIN_SUCCESS , LOGIN_START, LOGIN_FAILURE,LOGOUT} from './Type'

const initialState = {
    Log :  localStorage.getItem('token') ===null ? false:true,
    loading : false,
    user:{},
    error:''
}

const logInReducer = (state = initialState, action) =>{
    console.log(action.type === LOGOUT)
    switch(action.type){
        case LOGIN_START:
            return{ ...state , loading : true }

        case LOGIN_SUCCESS:

            localStorage.setItem('token',action.data.access)
            return {...state,loading : false, Log:true,user:action.data}

        case LOGIN_FAILURE:
            return {...state,loading : false, Log:false,error :action.data}

        case LOGOUT:
            console.log("yes")
            localStorage.removeItem('token')
            return{...state,Log:false,user:{},error:''}
            
        default: return state
    }

}

export default logInReducer