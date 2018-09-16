import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, TextField, InputAdornment} from '@material-ui/core';
import flagImage from '../images/bg-header3.jpg'
import freedomLogo from '../images/logo.png'
import logoText from '../images/tag425.png'
import 'typeface-roboto'

const styles = {
    root: {
      flexGrow: 1, 
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    flagImage: {
        display: 'flex', 
        justifyContent: 'space-between',
        width: '100%',
        height: 130,
        backgroundImage: `url(${flagImage})`
    },
    logo: {
        marginLeft: 50,
        height: 100,
        marginTop: 10,

    },
    logoText: {
       marginRight: 80,
       marginTop: 20,
       height: 80,
    },
    appBar: {
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
    },
    margin: {
        color: '#ffffff',
        marginTop: 0,

    }
 };

class Header extends Component {
    

    state = {
        open: false,
    };

    showLogin = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }
    
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
               <div className={classes.flagImage}>
                <img className={classes.logo} src={freedomLogo} alt="" />
                <img className={classes.logoText} src={logoText} alt="" />
               </div>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/register">Register</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
               </Toolbar>
            </AppBar>
 
        )
    }
}

export default withStyles(styles)(Header)