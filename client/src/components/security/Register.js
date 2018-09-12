import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardContent, FormControl, Input, InputAdornment, InputLabel, Button, Avatar} from '@material-ui/core'
import {userLogin} from '../../containers/actions';
import {Email, Lock, PersonAdd} from '@material-ui/icons'
import {connect} from 'react-redux'
import logo from '../../images/logo.png'

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
        height: 560,
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
   
  };

class Register extends Component {

    logIn = (user) => {
        this.props.userLogin({user:{isLoggedIn:true}})
    }

    render () {
    
        const {classes} = this.props

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
                    <form className={classes.container} novalidatae autocomplete="off">
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="firstName">First Name</InputLabel>
                            <Input
                                id="firstName"
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
                                id="lastName"
                                inputType="email"
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
                                startAdornment={
                                    <InputAdornment position="start">
                                        *
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel className={classes.labelText} htmlFor="nickName">Nickname</InputLabel>
                            <Input
                                id="nickName"
                                startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl className={classes.margin}>
                        <InputLabel className={classes.labelText} htmlFor="password">Password</InputLabel>
                        <Input type="password"
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
                                id="verifyPassword"
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
                                id="verifyPassword"
                                multiline="true"
                                maxLength="255"
                                rowsMax="4"
                                startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Button variant="contained" color="primary" className={classes.login} onClick={this.logIn}>REGISTER</Button>
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