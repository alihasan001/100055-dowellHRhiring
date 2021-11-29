import './Nav.css'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../../../redux/LogIn/Action'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import img from '../../../images/logo.png'
import { Card, CardHeader, CardActions } from "@material-ui/core";
const Nav = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state.login)
    console.log(state.Log)

    const Logout = () => {
        dispatch(LogOut())
    }

    return(
        <Card style={{background:'green',color:'white',height:'65px',width:'100%',margin:'5px 0px',position:'relative',alignItems:'center', borderRadius : "2rem"}}>
            <diV style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{padding:'0px 30px'}}>
                <Link style={{textDecoration:'none',color:'white'}} to="/"><img style={{width:'200px',margin:'5px 0px',borderRadius:'50%'}} src ={img} /></Link>
                </div>
                <ul style={{listStyle:'none',padding:'0px 20px'}}>
                    
                    {
                        state.Log ?
                        <>
                        <li style={{display:'inline',margin:'0px 0px'}}>
                        <Button style={{width: "auto", height: "40px", backgroundColor: 'orange', color: '#FFFFFF' }}
                        type="submit" variant="contained" onClick={()=>history.push("/MyApp")}>Applications Status</Button>
                        </li>
                        <li style={{display:'inline',margin:'0px 30px'}}>
                        <Button style={{width: "100px", height: "40px", backgroundColor: 'orange', color: '#FFFFFF' }}
                        type="submit" variant="contained" onClick={Logout}> LogOut</Button>
                        </li>
                        </>

                        :
                        <Button style={{width: "100px", height: "40px", backgroundColor: 'orange', color: '#FFFFFF' }}
                        type="submit" variant="contained" >Join</Button> 

                    }

              
                    
                </ul>
            </diV>

        </Card>
    )
}
export default Nav