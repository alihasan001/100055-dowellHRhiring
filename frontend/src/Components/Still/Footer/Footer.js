import img from '../../../images/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Card, CardHeader, CardActions } from "@material-ui/core";
const Footer = () => {
   return(
       <Card style={{margin:'20px 0px',width:'100%', borderRadius : "2rem",border:'solid green'}}>
           <div style={{display:'flex',justifyContent:'space-evenly' }}>
                   <a href="https://www.youtube.com/channel/UC_Ftf9dTQtKHS2N0KD0duwg"> <YouTubeIcon style={{width:'50px',height:'100px',color:'green'}}/> </a>
                   <a href="https://www.linkedin.com/showcase/uxlivinglab/?viewAsMember=true"> <LinkedInIcon style={{width:'50px',height:'100px',color:'green'}} /> </a>
                   <a href="https://twitter.com/uxlivinglab"> <TwitterIcon  style={{width:'50px',height:'100px',color:'green'}}/> </a>
                   <a href="https://www.facebook.com/livinglabstories"> <FacebookIcon style={{width:'50px',height:'100px',color:'green'}} /> </a>
                   <a href="https://www.instagram.com/livinglabstories/"> <InstagramIcon style={{width:'50px',height:'100px',color:'green'}} /> </a>
                   <a href="https://www.uxlivinglab.com"> <WebAssetIcon  style={{width:'50px',height:'100px',color:'green'}}/> </a>
                </div>
       </Card>
   )
}
export default Footer