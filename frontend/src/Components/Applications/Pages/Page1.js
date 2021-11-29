import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import {Page1Filled} from '../../../redux/Apps/Action'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';


const ComboBox = () => {

    let {id} = useParams()
    let dispatch = useDispatch()
    let history = useHistory()

    let [state, setState] = useState({
        jobName: id,
        name : "",
        email : "",
        freelance : "",
        fprofie : "",
        qualification:"",
    })

    const Submit = (event) => {
        console.log(state)
        dispatch(Page1Filled(state))
        event.preventDefault();
        history.push('/page2')
    }
    return (

            <form style={{width: "100%", background: "white",margin:"15% 10%" }} onSubmit={Submit}>
                <div style={{ margin: "20px 10%",width:"60%", display: "flex", justifyContent: "center" }}>

                    <TextField style={{ width: "600px", display: "flex", }}
                        label="User-Name"
                        variant="outlined"
                        onChange = {e => setState({...state,name:e.target.value})}
                        required
                    />

                    <TextField style={{ display: "block", width: "600px", display: "flex", marginLeft: "50px" }}
                        label="User-Email"
                        variant="outlined"
                        required
                        onChange = {e=> setState({...state,email:e.target.value})}
                    />

                </div>

                <div style={{ margin: "40px 10%",width:"60%",  display: "flex", justifyContent: "center", }}>

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Freelance}
                        sx={{ width: 600 }}
                        onChange = {(e,v)=> setState({...state,freelance:v!==null ? v.label :''})}
                        renderInput={(params) => <TextField {...params} label="Fiver Platform" />}
                        required
                        
                    />

                    <TextField style={{ width: "600px", display: "flex", marginLeft: "30px", marginLeft: "50px" }}
                        label="FreeLance Profile URL"
                        variant="outlined"
                        required
                        onChange = {e=> setState({...state,fprofie:e.target.value})}
                    />

                </div>
                <div style={{ margin: "40px 10%", width: "60%", display: "flex", justifyContent: "center", }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Qualifications}
                        onChange = {(e,v)=> setState({...state,qualification:v!==null ? v.label :''})}
                        style={{ width: '60%' }}
                        renderInput={(params) => <TextField {...params} label="Education" />}
                        required
                    />
                </div>
                <Button style={{ margin: "10px 32%", width: "200px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" ><p>Next</p></Button>
                
            </form>
    );

}
const Freelance = [
    { label: 'Fiver', },
    { label: 'UpWork' },
    { label: 'Others'},

];

const Qualifications = [
    { label: 'University Degree'},
    { label: 'Post Graduate' },
    { label: 'Professional qualification (Engineering, Management)' },
    { label: 'Other:'},

];
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export default ComboBox