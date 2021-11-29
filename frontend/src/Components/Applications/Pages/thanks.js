import { useHistory } from "react-router"
import { Button } from "@material-ui/core"
const Thanks = () => {
    let history = useHistory()
    return(
        <div style={{margin:'5% 40%'}} >
            <h1 style={{width:'auto'}}>Thank you!!</h1>
            <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" onClick={() => history.push('/myapp')}><p>Check Job Status</p></Button>
        </div>
    )
}

export default Thanks