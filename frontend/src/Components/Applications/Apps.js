import axios from "axios"
import { useState,useEffect } from "react"
import OneCard from "../Still/Card"
import { Button,Card } from "@material-ui/core"
import { LogOut } from "../../redux/LogIn/Action"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { CircularProgress } from '@material-ui/core';
export const Apps = () => {
    let [data,setData] = useState([])
    let dispatch = useDispatch()
    let [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        axios.get('https://100055.pythonanywhere.com/api/jobs/Jobs/',{ headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }})
        .then(res => {
            console.log(res.data)
            setData(res.data)
            setLoading(false)
            
        })
        .catch(err => 
            {
                dispatch(LogOut())
                setLoading(false)
            }
        )
        
      },[]);

    let history = useHistory()
    const goto = (val) =>{
        history.push(`page1/${val}`)
    } 
    let colors = ['rgb(200, 250, 205)','rgb(208, 242, 255)','rgb(255, 247, 205)','rgb(255, 231, 217)']
    let cards = data.map((val,key)=>{
        if(data.length !==0){
            return <OneCard click = {goto} key={key} name= {val.applicationName} color={colors[key%4]} others={val.others} GTC={val.General_Terms_Conditions}
            PT ={val.Payment_terms} TS={val.Technical_Specifications} WF={val.Work_Flow}/>
        }
        
    })
    return(    
        
        !loading ? 
        <Card style={{margin:'10px 0px',borderRadius:"2rem",background:'black',height:'100%',width:'100%' }}>
            <div style={{display: "flex",flexWrap:"wrap",margin:'100px 75px'}}>
                {cards}
                
            </div>
     
        </Card>
        :
        <h1 style={{textAlign:'center'}}>
        <CircularProgress style={{ margin: "25% 50px",width:'100px',color:'green'}}/>
     </h1>

    )
}