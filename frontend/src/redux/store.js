import {createStore, combineReducers} from 'redux'
import logInReducer from './LogIn/Reducers'
import SignUpReducer from './SignUP/Reducers'
import PageReducers from './Apps/Reducers'

const rootReducer = combineReducers({
    login : logInReducer,
    signup : SignUpReducer,
    Pages : PageReducers,
})

const store = createStore(rootReducer)

export default store
