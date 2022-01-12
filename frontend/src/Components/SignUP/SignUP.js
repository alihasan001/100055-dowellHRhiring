import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { SignUpSuccess,startSignUp,SignUpFailure } from '../../redux/SignUP/Action';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Select from 'react-select'
const SignUP = () => {
    let history = useHistory()
    const dispatch = useDispatch()

    let [userName, setName] = useState('')
    let [password, setPass] = useState('')
    let [email, setMail] = useState('')
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    // let [Role, setRole] = useState('')
    let [countryCode, setCountryCode] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let loading = useSelector(state => state.signup.loading)
    // const options = [
        
    //     { value: 'admin', label: 'Admin' },
    //     { value: 'member', label: 'Team member' },
    //     { value: 'client', label: 'Client' },
    //     { value: 'vendor', label: 'Vendor' },
    //     { value: 'freelance', label: 'Freelance' },
    //     { value: 'guest', label: 'Guest' }
    //   ]
    //   const handleChange = () => (
    //     <Select options={options} />
    //   )
    
    const [Role,setSelectedClient] = useState('');
    
    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
        console.log("ROle:............",Role)
    }
    const submit = (event) => {
        console.log(userName,password)
        event.preventDefault()
        dispatch(startSignUp())
        axios.post('https://100014.pythonanywhere.com/accounts/register', {user_name: userName,password: password,email: email, first_name: firstName,last_name: lastName,role: Role,country_code: countryCode,phone_number: phoneNumber}  ,{ headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}})
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
        <div style={{ height: "100%", width: "50%", background: "white",margin:"10px auto" }} >
            <h1>Sign UP</h1>
            <p>Join Dowell Research for a <b style={{color:"green"}}> CHANGE</b></p>
                <TextField style={{ width: "400px", display: "flex" }}
                    label="User Name"
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
                 <TextField style={{ width: "400px", display: "flex" }}
                    label="Email"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setMail(e.target.value)}
                    required
                />
                <TextField style={{ width: "400px", display: "flex" }}
                    label="First name"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <TextField style={{ width: "400px", display: "flex" }}
                    label="Last name"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            <select  defaultValue={Role} onChange={handleSelectChange} style={{margin: "10px 0px", width: "400px",height:"30px", display: "flex" }}>
                <option value={Role} disabled>Select your role</option>
                <option value="admin">Admin</option>
                <option value="member">Team Member</option>
                <option value="client">Client</option>
                <option value="vendor">Vendor</option>
                <option value="freelance">Freelance</option>
                <option value="guest">Guest</option>
            </select>
            {/* < MyComponent /> */}
            <TextField style={{ width: "400px", display: "flex" }}
                    label="Country Code"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setCountryCode(e.target.value)}
                    required
                />
                <TextField style={{ width: "400px", display: "flex" }}
                    label="Phone number"
                    variant="outlined"
                    // color="primary"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" onClick={submit}>{loading ? <CircularProgress style={{ margin: "0px 50px", }} /> : <p>SIGN UP</p>}</Button>
                <Link to="/" style={{alignItems:"center"}}> <h4 style={{textDecoration:"none"}}>Already a User?     Sign-In</h4></Link>
            </div>
    
    )
}

export default SignUP