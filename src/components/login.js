import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import{Link} from 'react-router-dom';



const Login=({handleChange})=>{


    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const afterbtnstyle={margin:'5px 0'}
    
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
         

         <Link to="/dashboard">
            <Button
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth 
             
            >
              Sign In
            </Button>
            </Link>
          

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
