import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardContent, Button, Typography} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

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

class Profile extends Component {


    state = {
        toLogin: false,
    }

    logIn = (user) => {
        this.setState({toLogin: true})
    }

    render () {
    
        const {classes} = this.props
        const {user} = this.props

        if(!user._id) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                  <Card className={classes.card}>
        
                    <CardContent>
                         <Typography variant="display1" className={classes.message} >
                            User Profile Goes Here
                        </Typography>
                        
                    </CardContent>

                </Card>
            </div>
        )
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userLogin: (user) => dispatch(userLogin(user)),
      
//     }
//  }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Profile))