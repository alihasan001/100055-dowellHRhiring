import axios from "axios"
import { useState,useEffect } from "react"
import './card.css'
import { Card, CardHeader, CardActions, Button } from "@material-ui/core";
import { useHistory } from "react-router"
import { CircularProgress } from '@material-ui/core';
const AppCard = (props) =>{
    let history = useHistory()
return(
    <Card className="card" style={{ margin: '10px 0',marginBottom:"20px", width: '300px', transitionDuration: '0.3s', height: '10vh', background: '#F4F4F4' }} onClick={()=>props.click(props.id)}>

    <CardHeader style={{textAlign:"center"}}
        title={props.name}   
    />
      

</Card>
)
}

const SingleCard = (props) => {
    const lvl = 'HR'
    console.log(props.data.applicationlvl)
    return(
        <Card className="card" style={{width: 'auto', transitionDuration: '0.3s', height: 'auto', background: '#F4F4F4' }}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <CardHeader 
                    title={props.data.applicationName}   
                />
                <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex"  }}
                type="submit" variant="contained" >{props.data.status !== ''?'In-Process' :props.data.status}</Button>
            </div>
            {
                props.data.applicationlvl === 'HR' ? <div className="card" style={{width: '800px',backgroundColor:'white',margin:"20px 50px", transitionDuration: '0.3s', height: 'auto', background: '#F4F4F4' }}>
               <span><h3>Meeting with HR: 3:00 PM</h3><h3>Discord-Link: <a href="https://discord.com/">Join the Discussion Channel</a></h3></span>
             
                <h4></h4>
            </div>
            : 
            <div className="card" style={{width: '800px',backgroundColor:'white',margin:"20px 50px", transitionDuration: '0.3s', height: 'auto', background: '#F4F4F4' }}>
               <span><h3>You've Passed HR process</h3><h3>Meeting with TeamLead: 3:00 PM</h3><h4>Discord-Link: <a href="https://discord.com/">Join the Discussion Channel</a></h4></span>
          
                <h4></h4>
            </div>
            }





    </Card>
    )
}

const MyApp = () => {
    let [myApp, setApp] = useState([])
    let [currentAPP, setcurrentAPP] = useState([])
    let [loading,setLoading] = useState(false)
    
    useEffect(() => {
        if (myApp.length === 0){
            setLoading(true)
            const token = localStorage.getItem('token')
            axios.get('https://100055.pythonanywhere.com/api/jobs/job/',{ headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }})
            .then(res => {
                setApp(res.data.res)
                setcurrentAPP(res.data.res[0])
                setLoading(false)
            })
            .catch(err => 
                {
                    console.log(err)
                    setLoading(false)
                }
                    )
        }

      },[]);

    const getId = (id) => {
        setcurrentAPP(myApp[id])
    }
    console.log((myApp))
    let cards = myApp.map((val,key)=>{
    if(myApp.length !==0){
        return <AppCard key={key} name={val.applicationName} click={getId} id = {key}/>
    }

    })


    return(
            !loading ?  (myApp.length > 0 ? 
            (
            <div style={{ display: "flex",margin:"20px 20px"}}>
            <div >
                {cards}
            </div>
    
            <div style={{ width: "auto", background: "white",margin:"10px 20px" }} >
                <SingleCard name ="ali" data={currentAPP}/>
            </div>
            </div>
            )
            :
            (<h1 style={{textAlign:'center'}}>
                No application Submitted Yet
            </h1>))
            :
            <h1 style={{textAlign:'center'}}>
               <CircularProgress style={{ margin: "25% 50px",width:'100px',color:'green'}}/>
            </h1>

    )
}
export default MyApp





