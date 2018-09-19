import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Paper, Typography, withStyles} from '@material-ui/core'


const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    subheader: {
      width: '100%',
    },
    video: {
        margin: 0,
    },
    card: {
        margin: '10px 10px 0px 0px',
        paddingTop: 10,
        width: 230,
        height: 190,

    },
    videoViews: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3,
    },
    videoSpan: {
        margin: '0 20 0 20',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 20,
        width: '90%',

    },
    search: {
        marginTop: 10,
    },
    title: {
        fontSize:14,
        fontWeight: 500,
    },
    wrapVideos: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 0 0 20px',
    },
    views: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3px 20px 0 20px',
    },
    searchButton: {
        margin: '0 0 0 10px',
        height: 10,
        width: 10,
    },
    pageName: {
        margin: '3px 0 6px 0',
    },
    searchIcon: {
        fontSize: 28,
    }

  });

class Video extends Component {

    truncateTitle = (title) => {
     
        if(title.length > 28) {
            return title.substring(0, 28) + "..."
        } else {
            return title
        }
    }

    render() {

        const {classes, video} = this.props

        return (
            <Paper className={classes.card}>
                <Typography variant="body1" className={classes.pageName}>
                    Page Name goes here
                </Typography>
                <Link to={{
                    pathname: '/video',
                    state: {
                        blah: true,
                        video: video,
                    }     
                }} >
                    <video className={classes.video}
                        preload="metadata"
                        width="220"
                        height="120"
                        >
                        <source src={video.sources + "#t=5"} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>   
                </Link>
                <div>
                    <label className={classes.title}>{this.truncateTitle(video.title)}</label>
                    <div className={classes.views}>
                        <Typography variant="caption">10 Views</Typography>
                        <Typography variant="caption"> Last: 2018-09-14</Typography>
                    </div>

                </div>
            </Paper> 
        )     
    }
}

export default withStyles(styles)(Video)