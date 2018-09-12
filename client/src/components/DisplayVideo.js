import React, {Component} from 'react'
import mediaJSON from '../data/streaming.js'
import {Grid, Card, CardHeader, CardContent, Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 80,
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
        justifyContent: 'center',
        width: '90%',
        height: '90%',
        margin: '20px 10px 10px 20px',
       
    },
    paper: {
        margin: 'auto',
        width: '70%',
        height: '70%',
    },
    upOrDown: {
        margin: '0 30px 0 10px',
        fontSize: 28,
        fontWeight: 500,
    }

  });

class DisplayVideo extends Component {

    state = {
        video: {},
        voteUp: 0,
        voteDown: 0,
    }

    componentDidMount () {
        const {video} = this.props.location.state

        this.setState({video: video})
    }

    voteUp = () => {
        this.setState({voteUp: this.state.voteUp + 1})
    }

    voteDown = () => {
        this.setState({voteDown: this.state.voteDown + 1})
    }

    render() {
        const {video, voteUp, voteDown} = this.state
        const {classes} = this.props
        
        return (
            <div className={classes.root}>
                <h1>{video.title}</h1>
                <Paper className={classes.paper}>
                    <video controls className={classes.video}
                        autoPlay="true"
                        preload="metadata"
                    >
                        <source src={video.sources + "#t=5"} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>   
                    <div className={classes.votes}>
                        <ThumbUp color='action' style={{fontSize: 36}} onClick={this.voteUp} />
                        <span className={classes.upOrDown}>{voteUp}</span>
                        <ThumbDown color='action' style={{fontSize: 36}} onClick={this.voteDown} />
                        <span className={classes.upOrDown}>{voteDown}</span>
                    </div>
                </Paper>               
            </div>
        )
    }
}
export default withStyles(styles)(DisplayVideo)