import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { SignUpSuccess,startSignUp,SignUpFailure } from '../../redux/SignUP/Action';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const SignUP = () => {
    let history = useHistory()
    const dispatch = useDispatch()

    let [userName, setName] = useState('')
    let [password, setPass] = useState('')
    let loading = useSelector(state => state.signup.loading)
    

    const submit = (event) => {
        console.log(userName,password)
        event.preventDefault()
        dispatch(startSignUp())
        axios.post('https://100055.pythonanywhere.com/api/addUser', {username: userName,password: password}  ,{ headers: { 'Content-Type': 'application/json' }})
        .then(
          res => {
              console.log("yes")
              dispatch(SignUpSuccess(res.data))
              history.push('/')
          }
        ).catch(
            err => {
                console.log(err)
                dispatch(SignUpFailure())
            }
        )
    }

    return (
        <div style={{ height: "100%", width: "50%", background: "white",margin:"10% auto" }} >
            <h1>Sign UP</h1>
            <p>Join Dowell Research for a <b style={{color:"green"}}> CHANGE</b></p>
                <TextField style={{ width: "400px", display: "flex" }}
                    label="User-Email"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <TextField style={{ margin: "10px 0px", width: "400px", display: "flex" }}
                    label="Password"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    required
                />

                <TextField style={{ margin: "10px 0px", width: "400px", display: "flex" }}
                    onChange={(e) => setPass(e.target.value)}
                    label="Confirm-Password"
                    variant="outlined"
                    required
                    type="password"
                // color='#primary'
                />
                <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" onClick={submit}>{loading ? <CircularProgress style={{ margin: "0px 50px", }} /> : <p>SIGN UP</p>}</Button>
                <Link to="/" style={{alignItems:"center"}}> <h4 style={{textDecoration:"none"}}>Already a User?     Sign-In</h4></Link>
            </div>
    
    )
}

export default SignUP