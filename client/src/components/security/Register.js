import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardContent, FormControl, Input, InputAdornment, InputLabel, Button, Avatar, Typography} from '@material-ui/core'
import {userLogin} from '../../containers/actions';
import {PersonAdd} from '@material-ui/icons'
import {connect} from 'react-redux'
import logo from '../../images/logo.png'
import * as api from '../../data/api.js'

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 100,
        height: 580,
        width: 600,
        background: "#ffffff",
    },
    login: {
        marginTop: 30,
        width: '90%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    margin: {
        margin: '20px 20px 0 0',
        width: 250,
    },
    textarea: {
        margin: '20px 20px 0 0',
        width: 520,
        maxLength: 255,

    },
    textField: {
        width: 200,
    },
    header: {
        
        height: 40,
        width: 500,
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
        marginTop: 40,
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
        marginTop: 15,
        textDecoration: "none",
        color: '#304FFE',
    },
    errorMessage: {
        fontSize: 22,
        marginTop: 10,
        color: 'red',

    },
    passwordInstructions: {
        marginTop: 10,
        textAlign: 'left',
    }
   
  };

class Register extends Component {

    state = {
        user: {
            firstName: '', 
            lastName: '',
            pageName: '',
            email: '',
            password: '',
            missionStatement: '',
        },
        err: '',
        toSucces: false,
    }

    formFill(property, event) {
    
       let {user} = this.state
       user[property] = event.target.value

       this.setState({user:user})
    

    }

    register = () => {

        this.setState({err:''})
        const {user, err} = this.state


       

        if(user.password !== user.verifyPassword) {
            this.setState({err:'Passwords do Not match'})
            return
        }
        


        let checkPassword = this.validate(user.password)

        if(!checkPassword) {
           this.setState({err:'Invalid Password'})
           return
        }


        api.doRegister(this.state.user).then( (user) => {
            if(user.email === 'Email Already Exists') {
                this.setState({err:'Account Exists'})
                return
            }
            this.setState({err: user.email})
            this.setState({toSuccess: true})
        })
    }

    onSubmit = (event) => {
       event.preventDefault()
       this.register()
    }

    validate(password) {
        var minMaxLength = /^[\s\S]{8,32}$/,
            upper = /[A-Z]/,
            lower = /[a-z]/,
            number = /[0-9]/,
            special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    
        if (minMaxLength.test(password) &&
            upper.test(password) &&
            lower.test(password) &&
            number.test(password) &&
            special.test(password)
        ) {
            return true;
        }
    
        return false;
    }

    render () {
    
        const {classes} = this.props
        const {err, toSuccess} = this.state
 
        if(toSuccess) {
            return <Redirect to='/success' />
        }


        return (
            <div>
                  <Card className={classes.card}>
                    
                    <CardHeader className={classes.header} avatar={
                        <Avatar className={classes.headerIcon}>
                            <PersonAdd />
                        </Avatar>
                        }
                    />    
                    <CardContent>
                    <img className={classes.logo} src={logo} alt="freedoms Bell" />
                    <form className={classes.container} onSubmit={this.onSubmit}>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="firstName">First Name</InputLabel>
                            <Input required
                                id="firstName"
                                onChange={this.formFill.bind(this, 'firstName')}
                                startAdornment={
                                    <InputAdornment position="start"> 
                                       *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="lastName">Last Name</InputLabel>
                            <Input
                                required
                                id="lastName"
                                onChange={this.formFill.bind(this, 'lastName')}
                                type="email"
                                startAdornment={
                                    <InputAdornment position="start">
                                        *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="email">Email</InputLabel>
                            <Input type="email"
                                   required
                                   onChange={this.formFill.bind(this, 'email')}
                                   startAdornment={
                                    <InputAdornment position="start">
                                        *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="pageName">Page Name</InputLabel>
                            <Input
                                id="pageName"
                                onChange={this.formFill.bind(this, 'pageName')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        &nbsp;
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Typography variamt="paragraph1" className={classes.passwordInstructions}>Password must be at least 8 characters, contain an upper and lower case letter, a number and a special character.</Typography>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="password">Password</InputLabel>
                            <Input type="password"
                                required
                                id="password"
                                onChange={this.formFill.bind(this, 'password')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="nickName">Verify Password</InputLabel>
                            <Input
                                type="password"
                                id="verifyPassword"
                                onChange={this.formFill.bind(this, 'verifyPassword')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl className={classes.textarea}>
                            <InputLabel className={classes.labelText} htmlFor="mission">Mission Statement</InputLabel>
                            <Input
                                type="password"
                                id="missionStatement"
                                multiline
                                maxLength="255"
                                rowsMax="4"
                                onChange={this.formFill.bind(this, 'missionStatement')}
                                startAdornment={
                                    <InputAdornment position="start">
                                       &npsp;
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className={classes.errorMessage}>
                            <label>{err}</label>
                        </div>
                        <Button type="submit" variant="contained" color="primary" className={classes.login} >REGISTER</Button>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register))