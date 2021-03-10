import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import Dashboard from './dashboard';
// import {Redirect} from 'react-router-dom';
// import { useHistory } from "react-router-dom";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';

// class Login extends React.component
const Login=({handleChange})=>{


    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const afterbtnstyle={margin:'5px 0'}
    // function HomeButton() {
    //   const history = useHistory();
    
    //   function handleClick() {
    //     history.push("/dashboard");
    //   }
 
    // function App(props) {
    //   const onClick = () => {
    //     console.log(props.history);
    //     props.history.push("/dashboard");
    //   }

    return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2> Sign In</h2>
          </Grid>

          <TextField
            label="Username"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          {/* <Router path = "./dashboard.js" component = {Dashboard}>  */}
          {/* <Link path = "./dashboard.js" component = {Dashboard}> */}

         <a href="/dashboard">
            <Button
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth 
              // onClick={onClick}
            >
              Sign In
            </Button>
            </a>
            {/* <Route path="/about" component={Dashboard} /> */}

          <Typography style={afterbtnstyle}>
            <Link href="#">Forget Password ?</Link>
          </Typography>
          <Typography>
            Do You Have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up ?
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
    };
export default Login