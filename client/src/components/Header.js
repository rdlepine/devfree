import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {userLogout} from '../containers/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, Paper, IconButton, Menu, MenuItem, MenuList} from '@material-ui/core';
import {Person} from '@material-ui/icons'
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

    },
    me: {
        display: 'flex',
        width: 190,
        justifyContent: 'space-between',
        margin: '0 20px 0 20px',
    },
    meMenu: {
        fontSize: 28,
        marginTop: -5,
    },
    meMessage: {
        marginTop: 15,   
    }
 };

class Header extends Component {
    

    state = {
        menuOpen: null,
    };

    openMenu = (event) => {
        this.setState({menuOpen: event.currentTarget})
    }

    closeMenu = () => {
        this.setState({menuOpen: null})
    }
    
    logOut = () => {
        this.props.userLogout()
    }
    
    render() {
        const { classes, user } = this.props;
        const {menuOpen} = this.state
 
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
                    {!user._id && (
                        <div>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/register">Register</Button>         
                        </div>
                     )}
                  
                    <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    {user._id && (
                        <div className={classes.me}>
                            <Typography variant="pargraph1" color="inherit" className={classes.meMessage}>
                                Welcome back {user.firstName}
                            </Typography>
                            <IconButton color="inherit" aria-label="Add an alarm" onClick={this.openMenu}>
                                <Person className={classes.meMenu} />
                            </IconButton>
                            <Menu
                                id="user-menu"
                                anchorEl={menuOpen}
                                open={Boolean(menuOpen)}
                                onClose={this.closeMenu}
                            >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My Videos</MenuItem>
                            <MenuItem onClick={this.logOut}>Logout</MenuItem>
                          </Menu>
                        </div>
                    )}
               </Toolbar>
            </AppBar>
 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout()),
      
    }
 }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))