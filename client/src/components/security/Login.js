import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardContent, FormControl, Input, InputAdornment, InputLabel, Button, Avatar, IconButton} from '@material-ui/core'
import {userLogin} from '../../containers/actions';
import {Email, Lock} from '@material-ui/icons'
import {connect} from 'react-redux'
import logo from '../../images/logo.png'
import * as api from '../../data/api.js'

const styles = {
    card: {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 100,
        height: 440,
        width: 420,
        background: "#ffffff",
    },
    login: {
        marginTop: 30,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    margin: {
        marginTop: 40,
        width: 300,
    },
    header: {
        
        height: 40,
        width: 300,
        borderRadius: 10,
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
       
        position: 'absolute',
        marginTop: -30,
        marginLeft: 20,
        boxShadow:
        "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    logo: {
        width: 280,
        height: 80,
        marginTop: 30,
    },
    headerIcon: {
        background: "transparent",
        borderRadius: 0,
        color: '#cc0c0c0',
        transform: "scale(1.8)"
    },
    title: {
        fontSize: "1.2em",
        color: '#ffffff',
    },
    labelText: {
        fontSize: "1.2em",
        fontWeight: 600,
    },
    buttonLink: {
        marginTop: 10,
        textDecoration: "none",
        color: '#304FFE',
    },
    errorMessage: {
        fontSize: 18,
        marginTop: 10,
        color: 'red',

    },
   
  };

class Login extends Component {
 
    state = {
        user: {
            email: '',
            password: '',
        },
        err: '',
        toProfile: false
    }

    logIn = () => {
      //  this.props.userLogin({user:{isLoggedIn:true}})  api.doRegister(this.state.user).then( (user) => {

        this.setState({err:''})
        api.doLogin(this.state.user)
            .then( (user) => {  
                if(user.err) {
                    console.log(user.err)
                    this.setState({err: user.err})
                    return
                } else {
                    this.props.userLogin(user.user)
                    localStorage.setItem('freedomToken', user.token)
                    this.setState({toProfile: true})
                }
            })
            .catch((err) => console.log(err))
    }

    formFill(property, event) {
    
        let {user} = this.state
        user[property] = event.target.value
 
        this.setState({user:user})
     
 
     }

    render () {
    
        const {classes} = this.props
        const {err, toProfile} = this.state

        if(toProfile) {
            return <Redirect to="/" />
        }

        return (
            <div>
                  <Card className={classes.card}>
                    
                    <CardHeader className={classes.header} avatar={
                        <Avatar className={classes.headerIcon}>
                            <Lock />
                        </Avatar>
                        }
                    />    
                    <CardContent>
                    <img className={classes.logo} src={logo} alt="freedoms Bell" />
                    <FormControl className={classes.margin}>
                        <InputLabel className={classes.labelText} htmlFor="email">Email</InputLabel>
                        <Input
                            onChange={this.formFill.bind(this, 'email')}
                            id="email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel className={classes.labelText} htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            onChange={this.formFill.bind(this, 'password')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            }
                        />
                        <div className={classes.errorMessage}>
                            <label>{err}</label>
                        </div>
                        <Button variant="contained" color="primary" className={classes.login} onClick={this.logIn}>LOGIN</Button>
                        <a href="" className={classes.buttonLink}>Reset Password</a>
                     </FormControl>
        
                    </CardContent>

                </Card>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user)),
      
    }
 }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))