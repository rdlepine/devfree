import React, {Component} from 'react'
import mediaJSON from '../data/streaming.js'
import {Grid, Card, CardHeader, CardContent, Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    gridList: {
      width: '100%',
      height: 450,
    },
    subheader: {
      width: '100%',
    },
    imageSpacing: {
        margin: 10,
    },
    titleBar: {
        position: 'absolute',
        width: 320,
        top: 140,
        
        color: '#c0c0c0',
    },
    video: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        height: '80%'
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        height: '60%',
    },
    videoViews: {
        display: "flex",
        justifyContent: "space-between",
    },
    videoSpan: {
        margin: "0 20 0 20",
    }

  });

class DisplayVideo extends Component {

    state = {
        video: {}
    }

    componentDidMount () {
        const {video} = this.props.location.state

        this.setState({video: video})
    }

    render() {
        const {video} = this.state
        const {classes} = this.props
        
        return (
            <div className={classes.root}>
                <h1>{video.title}</h1>
                    <Paper className={classes.paper}>
                        <video controls className={classes.video}
                            preload="metadata"
                        >
                            <source src={video.sources + "#t=5"} type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>   
                    </Paper>               
            </div>
        )
    }
}
export default withStyles(styles)(DisplayVideo)