import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardContent, Paper, FormControl, Input, InputAdornment, InputLabel, Button, Avatar, IconButton, Typography} from '@material-ui/core'
import {userLogin} from '../containers/actions';
import {Email, Lock, Videocam} from '@material-ui/icons'
import {connect} from 'react-redux'
import logo from '../images/logo.png'
import 'typeface-roboto'
import * as api from '../data/api.js'

const styles = {
    card: {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 100,
        height: 440,
        width: 750,
        background: "#ffffff",
    },
    login: {
        marginTop: 30,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title: {
        fontWeight: 500,
        marginBottom: 40,
        textColor: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
    },
    margin: {
        marginTop: 1,
       
    },
    header: {
        
        height: 30,
        width: 30,
        borderRadius: 10,
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
       
        position: 'absolute',
        marginTop: -30,
        marginLeft: 10,
        boxShadow:
        "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    headerIcon: {
        background: "transparent",
        borderRadius: 0,
        color: '#cc0c0c0',
        transform: "scale(1.8)"
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
    btnMargin: {
        marginBottom: 20,
    },
    uploadDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 30,
        width: 300,
      
    }
    
   
  };

class Videos extends Component {
 
    state = {
        uploadVisible: true,
    }

  
    toggleUpload = () => {
        this.setState({uploadVisible: !this.state.uploadVisible})
    }

    formFill(property, event) {
    
        let {user} = this.state
        user[property] = event.target.value
 
        this.setState({user:user})
     
 
     }

     componentDidMount() {
         this.setState({uploadVisible: true})
     }

    render () {
    
        const {classes, user} = this.props
        const {err, uploadVisible} = this.state

        return (
            <div>
                  <Card className={classes.card}>
                    
                    <CardHeader className={classes.header} avatar={
                        <Avatar className={classes.headerIcon}>
                            <Videocam />
                        </Avatar>
                        }
                    />    
                    <CardContent>
                        <Typography variant="display1" className={classes.title}>
                            MY VIDEOS
                        </Typography>
                        <Button color="primary" onClick={this.toggleUpload} className={classes.btnMargin}>Upload Video</Button>
                        <div hidden={uploadVisible}  >
                            <form  onSubmit={this.onSubmit} className={classes.uploadDiv}>
                                <FormControl className={classes.margin}>
                                    <InputLabel className={classes.labelText} htmlFor="videoTitle">Title</InputLabel>
                                    <Input required
                                        id="videoTitle"
                                        onChange={this.formFill.bind(this, 'videoTitle')}
                                        startAdornment={
                                            <InputAdornment position="start"> 
                                            *
                                            </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                    <FormControl className={classes.textarea}>
                                        <InputLabel className={classes.labelText} htmlFor="descripttion">Description</InputLabel>
                                        <Input
                                            id="verifyPassword"
                                            multiline="true"
                                            maxLength="255"
                                            rowsMax="4"
                                            onChange={this.formFill.bind(this, 'description')}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                  
                            </form>
                        </div>
                        {user.videos === undefined || user.videos.length === 0?
                                <Typography variant="subheading">
                                    You have no videos
                                </Typography>
                            :
                            <h4>some videos</h4>
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Videos))