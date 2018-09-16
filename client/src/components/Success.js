import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardContent, Button, Typography} from '@material-ui/core'
import {Email, Lock} from '@material-ui/icons'
import logo from '../images/logo.png'
import {Redirect} from 'react-router-dom'

const styles = {
    card: {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 100,
        height: 440,
        width: 500,
        background: "#ffffff",
    },
    login: {
        marginTop: 30,
        width: '70%',
    },
    margin: {
        marginTop: 40,
        width: 300,
    },
    logo: {
        width: 300,
        height: 80,
        marginTop: 40,
    },
    buttonLink: {
        marginTop: 15,
        textDecoration: "none",
        color: '#304FFE',
    },
    message: {
        marginTop: 20,
    }
   
  };

class Success extends Component {


    state = {
        toLogin: false,
    }

    logIn = (user) => {
        this.setState({toLogin: true})
    }

    render () {
    
        const {classes} = this.props
        const {toLogin} = this.state

        if(toLogin) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                  <Card className={classes.card}>
        
                    <CardContent>
                        <img className={classes.logo} src={logo} alt="freedoms Bell" />
                        <Typography variant="paragraph2" className={classes.message} >
                            Thank you for registering at Freedom's Bell. An email has been sent to verify your account.
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.login} onClick={this.logIn}>CONTINUE TO LOGIN</Button>
                    </CardContent>

                </Card>
            </div>
        )
    }

}

export default withStyles(styles)(Success)