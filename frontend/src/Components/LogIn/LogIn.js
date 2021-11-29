import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux';
import {LogInFailure,LogInSuccess,startLogin} from '../../redux/LogIn/Action'
import { CircularProgress } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch()
    let history = useHistory()

    let [userName, setName] = useState('')
    let [password, setPass] = useState('')

    let state = useSelector(state => state.login)

    const submit = () => {

        dispatch(startLogin())
        
        axios.post('https://100055.pythonanywhere.com/token/', {username: userName,password: password}  ,{ headers: { 'Content-Type': 'application/json' }})
        .then(
          res => 
          {
            dispatch(LogInSuccess(res.data))
            history.push("/")

        }
        )
        .catch(  err => dispatch( LogInFailure(err.message) ))
    }


    return (






        <div style={{ height: "100%", width: "50%", background: "white",margin:"10% 40%" }} >
            <h1>Sign in</h1>
            <p>Join Dowell Research for a <b style={{color:"green"}}> CHANGE</b></p>
            <TextField style={{ width: "400px", display: "flex" }}
                label="User-Name"
                variant="outlined"
                // color="primary"
                onChange={(e) => setName(e.target.value)}
                required
            />

            <TextField style={{ margin: "10px 0px", width: "400px", display: "flex" }}
                onChange={(e) => setPass(e.target.value)}
                label="Password"
                variant="outlined"
                required
                type="password"
            // color='#primary'
            />

            <Link to="#"><h4>Forget Password?</h4></Link>
            <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex"  }}
                type="submit" variant="contained" onClick={submit}>{state.loading? <CircularProgress style={{ margin: "0px 50px",}}/>  : <p>LOG IN</p>}</Button>
            <Link to="/signup" style={{alignItems:"center"}}> <h4>New to Dowell? Join Now</h4></Link>
            {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
            </div>
    )
}
export default Login