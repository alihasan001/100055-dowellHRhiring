import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"
import Login from "../LogIn/LogIn"
import { Apps } from "../Applications/Apps"
const ProtectedRoute = ({component:Component, ...rest}) => {
    const auth = useSelector(state => state.login.Log)
    // let auth = false
    // console.log(auth1)
    return(
        <Route {...rest} 
        render= {props => {
            if(auth){
                return <Component {...props} />
            }
            else{
                
                return <Redirect to="/login" />
            }
        }}
        />
    )
}

export default ProtectedRoute