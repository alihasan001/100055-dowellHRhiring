import Login from './Components/LogIn/LogIn'
import SignUP from './Components/SignUP/SignUP';
import { Provider } from 'react-redux';
import Newcard from './Components/Still/Cards'
import store from './redux/store'
import { Card } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page1 from './Components/Applications/Pages/Page1'
import {Apps} from './Components/Applications/Apps'
import ProtectedRoute from './Components/Still/ProtectedRoutes'
import Page2 from './Components/Applications/Pages/Page2'
import Page3 from './Components/Applications/Pages/Page3'
import Page4 from './Components/Applications/Pages/Page4'
import Page5 from './Components/Applications/Pages/Page5'
import Page6 from './Components/Applications/Pages/Page6'
import MyApp from './Components/Applications/MyApplications/MyApp';
import thanks from './Components/Applications/Pages/thanks';
import Nav from './Components/Still/NavBar/NavBar';
import Home from './Components/Home/Home'
import Footer from './Components/Still/Footer/Footer'
const App = () => {
  return (
    <div style={{width:"80%",margin:'0 10%'}}>
    <Provider store={store}>

      <Router>
      <Nav />
        <Switch>
         <Route path="/login" component ={Login} exact/>
         
         <Route path = "/signup" component = {SignUP} />
         <ProtectedRoute path  = "/page1/:id" component = {Page1} exact/>
         <ProtectedRoute path  = "/page2" component = {Page2} exact/>
         <ProtectedRoute path  = "/page3" component = {Page3} exact/>
         <ProtectedRoute path  = "/page4" component = {Page4} exact/>
         <ProtectedRoute path  = "/page5" component = {Page5} exact/>
         <ProtectedRoute path  = "/page6" component = {Page6} exact/>
         <ProtectedRoute path = "/myapp" component = {MyApp} exact></ProtectedRoute>
         <ProtectedRoute path = "/thanks" component = {thanks} exact></ProtectedRoute>
         <ProtectedRoute path = "/app" component = {Apps} exact></ProtectedRoute>  
         <ProtectedRoute path = "/" component = {Home} exact></ProtectedRoute>
         </Switch>
    <Footer />
      </Router>
    </Provider>
    </div>
  );
}

export default App;
