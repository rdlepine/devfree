import React, {Component} from 'react'
import mediaJSON from '../data/streaming.js'
import {Paper, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import 'typeface-roboto'

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 40,
    },
    description: {
      margin: '0 40px 0 40px',
    },
    imageSpacing: {
        margin: 10,
    },
    title: {
        margin: '0 0 20px 0',

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
        height: '80%',
    },
    views: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 40px 10px 50px',
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
                <Typography variant="display1" className={classes.title}>{video.title}</Typography>
                <Paper className={classes.paper}>
                    <video controls className={classes.video}
                        autoPlay="true"
                        preload="metadata"
                    >
                        <source src={video.sources + "#t=5"} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>   
                    <Typography variant="body1" gutterBottom className={classes.description}>
                       {video.description}
                    </Typography>
                    <div className={classes.views}>
                      <Typography variant="caption">10 Views</Typography>
                      <Typography variant="caption"> Last: 2018-09-14</Typography>
                    </div>
                </Paper>               
            </div>
        )
    }
}
export default withStyles(styles)(DisplayVideo)