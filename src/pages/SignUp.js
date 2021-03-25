import React from "react";
import { AppBar, Toolbar, Avatar, Grid, Paper, Button, Link, TextField, Typography } from '@material-ui/core'
import {Redirect} from 'react-router-dom';

const gridStyle = {
    width: "100%",
    margin: "0px"
}

const leftPaperStyle = {
    width: "100%",
    backgroundColor:"#4051B5"
}

const rightPaperStyle = {
    padding: "20px",
    height: "60vh",
    width: "280px",
    margin: "20px auto"
}

const h3Style = {
    color: "#FFFFFF",
    padding: "20px"
}

const buttonstyle = {
    margin: "10px 0"
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            passwprd:"",
            firstname: "",
            lastname: "",
            success: false,
            login: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.redirectToLogIn = this.redirectToLogIn.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    redirectToLogIn(){
        this.setState({login: true});
    }

    render() {
        if (this.state.login){
            return <Redirect to='./login'/>
        }
        return(
            <div>
               <AppBar position="static">
                    <Toolbar>
                        <h1>Find-a-Friend</h1>
                    </Toolbar>
               </AppBar>
               <Grid container style={gridStyle} spacing={2}>
                   <Grid item xs={9}>
                       <Paper style={leftPaperStyle}>
                           <div>
                               <h3 style={h3Style}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </h3>
                               <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1062847171,39769152&fm=26&gp=0.jpg" alt="maomao" width="60%"/>
                           </div>
                       </Paper>
                   </Grid>
                   <Grid item>
                        <Paper style={rightPaperStyle} elevation={10}>
                        <Grid align='center'>
                            <Avatar></Avatar>
                            <h2>Sign Up</h2>
                        </Grid>
                            <form>
                                <TextField label='First name' placeholder="John" name="firstname" id="firstname" fullWidth required autoFocus 
                                onChange={this.handleChange} value={this.state.firstname}/>
                                <TextField label='Last name' placeholder="Wich" name="lastname" id="lastname" fullWidth required 
                                onChange={this.handleChange} value={this.state.lastname}/>
                                <TextField label='Email' placeholder="Enter email" name="email" id="email" fullWidth required 
                                onChange={this.handleChange} value={this.state.email}/>
                                <TextField label='Password' placeholder="Enter password" name="password" id="password" fullWidth required type="passoword"
                                onChange={this.handleChange} value={this.state.password}/>
                                <Button type="submit" color="primary" varient="contained" fullWidth style= {buttonstyle}>Sign Up</Button>
                            </form>
                            <Typography>
                                Already have an account?{" "}<Link href="" onClick={this.redirctToLogIn}>Log in</Link>
                            </Typography>
                        </Paper>
                   </Grid>
               </Grid>
            </div>
        )
    }
}

export default SignUp;