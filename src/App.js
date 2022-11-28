import "./Assets/CSS/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Signup from "./signup";
import PetRegistration from "./Petregistration"
import Footer from "./Footer";
import ScrollToTop from './ScrollToTop';
import PetDetails from "./Petdetails";
import UserDetails from "./Userprofile";


function App() {
  return (
    <>
  
    <ScrollToTop />
   
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={Signup} /> 
      <Route exact path="/petdetails/:p_id" component={PetDetails} /> 
      <Route exact path="/userprofile" component={UserDetails} />
      <Route exact path="/petregistration" component={PetRegistration} /> 
     
      </Switch>
    <Footer />
    </>
 
  );
}

export default App;