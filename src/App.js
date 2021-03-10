import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import SignInOutContainer from "./containers";
import Dashboard from "./components/dashboard";
import SiderDemo from "./components/siderdemo";
import {BrowserRouter as Router, Route,browserHistory,Switch,Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
            {/* <Switch>
            <Route path="/signInOut" exact component={SignInOutContainer}></Route>
             <Route path="/dashboard" exact component={Dashboard}></Route>
              <Redirect to="/signInOut"/>
            </Switch> */}
    {/* <Login />
      <SignUp /> */}
       {/* <SignInOutContainer></SignInOutContainer> */}
       
     <Dashboard></Dashboard>
    {/* <SiderDemo /> */}
    </div>
    </Router>
  );
}

export default App;
