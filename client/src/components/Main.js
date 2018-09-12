import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import mediaJSON from '../data/streaming.js'
import {Grid, Paper, InputAdornment, IconButton} from '@material-ui/core'
import { withStyles, TextField } from '@material-ui/core'
import {Search} from '@material-ui/icons';

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
        margin: 0,
    },
    card: {
        
    },
    cardHeader: {
        height: 40,
        borderRadius: 10,
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        margin: 0,
        width: '100%',
        boxShadow:
        "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"

    },
    videoViews: {
        display: 'flex',
        justifyContent: 'space-between',
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
                <Grid container spacing={8} >
                    {fvideos.map( (data, index) => (
                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} > 
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
                                        width="320"
                                        height="220"
                                        >
                                        <source src={data.sources + "#t=5"} type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>   
                                </Link>
                                <div>
                                    <h4>{data.title}</h4>
                                    <div className={classes.videoViews}>
                                        <label className="padLeft">Views: {0}</label>
                                        <label className="padRight">Likes: {0}</label>
                                    </div>

                                </div>
                            </Paper>               
                            </Grid>
                    ))}  
                </Grid>
               
            </div>
        )
    }

}

export default withStyles(styles)(Main)