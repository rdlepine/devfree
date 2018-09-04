import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#2e3b4e',
        color: '#ffffff',
    }
}

class Footer extends Component {
    
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.footer}>
                <div>I'm the footer</div>
            </div>
            
        )
    }

}

export default withStyles(styles)(Footer)