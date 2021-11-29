import { Card, CardHeader, CardActions, Button } from "@material-ui/core";
import { useHistory } from "react-router";

const OneCard = (props) =>{
    // 
    // gb(255, 247, 205)
    // gb(255, 231, 217)
    let history = useHistory()
    const ClickHnadler = () =>{
        console.log(props.GTC)
        localStorage.setItem('others',JSON.stringify(props.others))
        localStorage.setItem('GTC',JSON.stringify(props.GTC))
        localStorage.setItem('PT',JSON.stringify(props.PT))
        localStorage.setItem('TS',JSON.stringify(props.TS))
        localStorage.setItem('WF',JSON.stringify(props.WF))
        history.push(`page1/${props.name}`)
    }
    
    return(
        <Card style={{ margin: '10px 10px', display: 'block', width: '250px', transitionDuration: '0.3s', height: '250px', background: props.color,borderRadius:"2rem" }} onClick={ClickHnadler}>
        <CardHeader style={{padding:'25%',textAlign:'center'}}
            title={props.name}
            
        />
    </Card>
    )
}

export default OneCard