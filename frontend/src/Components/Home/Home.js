import { margin } from '@mui/system'
import Button from '@material-ui/core/Button'
import img from '../../images/hero.png'
import NewCard from '../Still/Card'
import svg from '../../images/background.svg'
import {useHistory} from 'react-router-dom'
const Home = () => {
    let history =useHistory()
    return (
        <div style={{borderRadius : "2rem",height:'100%'}}>
            <img style={{borderRadius : "2rem", width: '100%', position: 'relative', margin: "15px 0" }} src={svg} />
            <div style={{ position: 'absolute', top: '10%', margin: '20px 50px', color: 'white' }}>
                <h1 style={{ marginTop: '5%', fontSize: '4rem' }}>Start a <br />new Career<br />with <span style={{ color: 'green' }}>DOWELL</span></h1>
                <p style={{ width: '400px', wordBreak: 'normal' }}>Excited to start a new career with us? Click below to view the open positions and apply to the suitable  openings</p>
                <Button style={{ margin: "10px 0px", width: "400px", height: "50px", backgroundColor: '#12824C', color: '#FFFFFF', display: "flex" }}
                    type="submit" variant="contained" onClick = {() => history.push('/app')}><p>Apply for a Position</p></Button>
            </div>
            <div>
            </div>

        </div>
    )
}

export default Home