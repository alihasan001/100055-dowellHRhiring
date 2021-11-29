import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Page4Filled } from "../../../redux/Apps/Action";


const Page4 = () => {

const TS = JSON.parse(localStorage.getItem('TS'))
console.log(TS)
const forms = Object.keys(TS).map((val,key)=>{
    return(
        <>
        <FormControlLabel
        control={<Checkbox  required/>}
        label={TS[val]}
  />
  <br></br>
  </>
    )
})
  
  let history = useHistory()
  let dispatch = useDispatch()
  let fill = useSelector(state => state.Pages.page3)
  if (fill === false){
      history.push('page3')
  }
  const goBack = () => {
      history.push('page3')
  }

  const Submit = (event) => {
      dispatch(Page4Filled())
      event.preventDefault();
      history.push('/page5')
  }



    return(

        <form style={{ height: "auto", width: "100%", background: "white",margin:"100px 20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"clip" }} onSubmit={Submit}>
      {forms}

<Button style={{ margin: "10px 0", width: "200px", height: "50px", backgroundColor: 'red', color: '#FFFFFF', }}
                    type="submit" variant="contained" onClick={goBack}><p>Back</p></Button>
        <Button style={{ margin: "10px 20px", width: "200px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF',  }}
                    type="submit" variant="contained" ><p>Next</p></Button>
        </form>
    )
}

export default Page4