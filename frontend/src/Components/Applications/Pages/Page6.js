import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import axios from 'axios';
import { Page6Filled } from '../../../redux/Apps/Action';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
const ComboBox = () => {

    let [state, setState] = useState({})
    let [others,setOther] = useState({})
    let history = useHistory()
    let dispatch = useDispatch()
    console.log(others)
    const Submit = (event) => {

        const token = localStorage.getItem('token')
        event.preventDefault();
        const data =JSON.parse(localStorage.getItem('page1'))
        
        const newFrom = ({
            application:data.jobName,feedBack:state.feedback, url: data.fprofie, freelance:data.freelance, country:'',
            user:data.name, edu:data.qualification,others:others
        })
        axios.post('https://100055.pythonanywhere.com/api/jobs/Apls/', newFrom  ,{ headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }}).then(
            res => {

            history.push('/thanks')
            }

        )
        .then(
            err => console.log(err)
        )
        dispatch(Page6Filled())
    }
    const Change = (e,name) =>{
        const oldState = {...others}
        oldState[name] = e.target.value
        setOther(oldState)
    }
    const otherReq= JSON.parse(localStorage.getItem('others'))
    let text = Object.keys(otherReq).map( (val,key) =>{
            return(
                <>
                <TextField style={{ width: "500px",margin:"10px 0 "}}
                label={val}
                variant="outlined"
                onChange = {e => {Change(e,val)}}
                required
            />
            <br></br>
            </>
            )
        }
    )

    return (

        <form style={{ display: "flex", justifyContent: "center" }} onSubmit={Submit}>
            <div style={{ width: "100%", background: "white",margin:"15px 20px" }}>
                <div style={{ margin: "20px 10px",width:"500px", display: "block"}}>
                    {text}
                </div>
            <div style={{ margin: "10px 10px",width:"500px", display: "flex", justifyContent: "center" }}>
                <TextField style={{ width: "100%", display: "flex", }}
                    label="FeedBack,Suggestion"
                    variant="outlined"
                    onChange = {e => setState({...state,feedback:e.target.value})}
                    required
                />

            </div>                
                <Button style={{ margin: "10px 10px", width: "200px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" ><p>Submit</p></Button>
            </div>
        </form>
    );

}
const Freelance = [
    { label: 'Fiverr', },
    { label: 'Guru' },
    { label: 'Upwork' },
    { label: 'Others'},

];

const Qualificarions = [
    { label: 'University Degree'},
    { label: 'Post Graduate' },
    { label: 'Professional qualification (Engineering, Management)' },
    { label: 'Other:'},

];
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export default ComboBox