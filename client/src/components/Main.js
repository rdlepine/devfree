import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import mediaJSON from '../data/streaming.js'
import {Paper, InputAdornment, IconButton} from '@material-ui/core'
import { withStyles, TextField } from '@material-ui/core'
import {Search} from '@material-ui/icons';

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
        height: 180,

    },
    videoViews: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 500,
        marginTop: 10,
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
        fontSize: 20,
        fontWeight: 600,
    },
    wrapVideos: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 22,
    }

  });

class Main extends Component {

    state = {
        videos: [],
        filter: '',
    }

    componentDidMount() {
        this.setState({videos: mediaJSON.categories[0].videos})
    }

    onSearch = (event) => {
        const search = event.target.value
        this.setState({filter: search})
       
    }

    render() {
        const {videos, filter} = this.state

        const fvideos = videos.filter((v) => {
            return v.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        })

        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.top}>
                    <div className={classes.headerDiv}>
                        <h1>Trending</h1>
                        <TextField 
                            className={classes.search}
                            id="searchVideos"
                            label="Search"
                            onChange={this.onSearch}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                </div>
                <div className={classes.wrapVideos}>
                    {fvideos.map( (data, index) => (
                           <Paper className={classes.card}>
                                <Link to={{
                                    pathname: '/video',
                                    state: {
                                        blah: true,
                                        video: data,
                                    }     
                                }} >
                                    <video className={classes.video}
                                        preload="metadata"
                                        width="220"
                                        height="120"
                                        >
                                        <source src={data.sources + "#t=5"} type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>   
                                </Link>
                                <div>
                                    <label className={classes.title}>{data.title}</label>
                                    <div className={classes.videoViews}>
                                        <label className="padLeft">Views: {0}</label>
                                    </div>

                                </div>
                            </Paper>               
                    ))}  
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(Main)