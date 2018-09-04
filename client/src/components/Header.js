import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import flagImage from '../images/bg-header3.jpg'
import freedomLogo from '../images/logo.png'
import logoText from '../images/tag425.png'

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
        height: 150,
        backgroundImage: `url(${flagImage})`
    },
    logo: {
        marginLeft: 50,
        height: 110,
        marginTop: 20,

    },
    logoText: {
       marginRight: 80,
       marginTop: 40,
       height: 80,
    },
    appBar: {
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
    }
 };

class Header extends Component {
    

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
               <div className={classes.flagImage}>
                <img className={classes.logo} src={freedomLogo} alt="" />
                <img className={classes.logoText} src={logoText} alt="" />
               </div>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                    <Button color="inherit">About</Button>
               </Toolbar>
            </AppBar>
 
        )
    }
}

export default withStyles(styles)(Header)