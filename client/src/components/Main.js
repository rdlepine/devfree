import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import mediaJSON from '../data/streaming.js'
import {Paper, InputAdornment, IconButton, Button} from '@material-ui/core'
import { withStyles, TextField, Typography } from '@material-ui/core'
import {Search} from '@material-ui/icons';
import 'typeface-roboto'

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

class Main extends Component {

    state = {
        videos: [],
        search: '',
        filter: '',
    }

    componentDidMount() {
        this.setState({videos: mediaJSON.categories[0].videos})
    }

    onSearch = (event) => {
        const search = event.target.value
        this.setState({search: search})
       
    }

    doSearch = () => {
        const {search} = this.state

        this.setState({filter: search})
    }

    truncateTitle = (title) => {
     
        if(title.length > 28) {
            return title.substring(0, 28) + "..."
        } else {
            return title
        }
    }

    onSubmit =  (event) => {
        event.preventDefault()

       if(this.searchDisabled()) return
      
        this.doSearch()
     }

    searchDisabled = () => {
    
        const {search} = this.state

        let l = search.length
        if(l >= 1 && l < 3) {
            return true
        } else {
            return false
        }
        
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
                       
                        <h1>Latest</h1>
                        <div>
                        <form onSubmit={this.onSubmit}>
                            <TextField 
                                className={classes.search}
                                id="searchVideos"
                                onChange={this.onSearch}
                            />
                            <IconButton      
                                color="pirmary"
                                className={classes.searchButton}
                                disabled={this.searchDisabled()}
                                onClick={this.doSearch}>
                                    <Search color="primary" className={classes.searchIcon}/>
                            </IconButton>
                        </form>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapVideos}>
                    {fvideos.map( (data, index) => (
                           <Paper className={classes.card}>
                                <Typography variant="body1" className={classes.pageName}>
                                    {data.pageName}
                                </Typography>
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
                                    <label className={classes.title}>{this.truncateTitle(data.title)}</label>
                                    <div className={classes.views}>
                                        <Typography variant="caption">Views: {data.views}</Typography>
                                        <Typography variant="caption">Last Viewed: {data.lastViewed}</Typography>
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