import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Page3Filled } from "../../../redux/Apps/Action";



const Page3 = () => {
    let history = useHistory()
    let fill = useSelector(state => state.Pages.page2)
    if (fill === false) {
        history.push('page2')
    }

    const PT = JSON.parse(localStorage.getItem('PT'))
    const forms = Object.keys(PT).map((val, key) => {
        return (
            <>
                <FormControlLabel
                    control={<Checkbox required />}
                    label={PT[val]}
                />
                <br></br>
            </>
        )
    })
    
    let dispatch = useDispatch()


    const goBack = () => {
        history.push('page2')
    }

    const Submit = (event) => {
        dispatch(Page3Filled())
        event.preventDefault();
        history.push('/page4')
    }
    return (
        <form style={{ height: "auto", width: "100%", background: "white", margin: "100px 20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip" }} onSubmit={Submit}>
            {forms}
            {/* <FormControlLabel style={{display:"block"}}
            control={<Checkbox required />}
            label="Uxlivinglab will provide communication media accounts for executing the tasks. Any other method is sole discretion of uxlivinglab team"
      />
              <FormControlLabel style={{display:"block"}}
            control={<Checkbox required />}
            label="TDowell Discord account is the platform for day to day communication"
      />
            <FormControlLabel style={{display:"block"}}
            control={<Checkbox required />}
            label="Dowell Discord account is the platform for day to day communication"
      />
              <FormControlLabel style={{display:"block"}}
            control={<Checkbox  required/>}
            label="Data will be in Google spreadsheet or any other depending on task"
      />
              <FormControlLabel style={{display:"block"}}
            control={<Checkbox required />}
            label="Daily team meeting will be in Discord. You have to attend video calls with our team"
      /> */}
            <Button style={{ margin: "10px 0", width: "200px", height: "50px", backgroundColor: 'red', color: '#FFFFFF', }}
                type="submit" variant="contained" onClick={goBack}><p>Back</p></Button>
            <Button style={{ margin: "10px 20px", width: "200px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', }}
                type="submit" variant="contained" ><p>Next</p></Button>
        </form>
    )
}

export default Page3