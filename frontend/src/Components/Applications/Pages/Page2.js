import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Page2Filled } from "../../../redux/Apps/Action";

const Page2 = () => {

  let history = useHistory()

  let dispatch = useDispatch()
  const GTC = JSON.parse(localStorage.getItem('GTC'))
  let fill = useSelector(state => state.Pages.page1)
  if (fill === false) {
    history.push('page1')
  }

  const goBack = () => {
    history.push('page1')
  }

  const Submit = (event) => {
    dispatch(Page2Filled())
    event.preventDefault();
    history.push('/page3')
  }
  console.log(typeof (GTC))
  const forms = Object.keys(GTC).map((val, key) => {
    return (<>
      <FormControlLabel control={<Checkbox required />} label={GTC[val]} />
      <br></br>
    </>
    )
  })
  return (

    <form style={{ height: "auto", width: "auto", background: "white", margin: "100px 20px" }}>
        <h4>Thank you for applying to freelancing opportunity in uxlvinglab. Read following terms and conditions and accept</h4>

        <div style={{ display: 'flex', flexDirection: "column", }}>
        </div>
        {forms}
        <hr></hr>
        <Button style={{ margin: "10px 0", width: "200px", height: "50px", backgroundColor: 'red', color: '#FFFFFF', }}
          type="submit" variant="contained" onClick={goBack}><p>Back</p></Button>
        <Button style={{ margin: "10px 20px", width: "200px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', }}
          type="submit" variant="contained" onClick={Submit}><p>Next</p></Button>
    </form>
  )
}

export default Page2