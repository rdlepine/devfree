import React, {Component} from 'react'
import mediaJSON from '../data/streaming.js'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { withStyles } from '@material-ui/core/styles'
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
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
    }
  });

class Main extends Component {

    render() {
        const videos = mediaJSON.categories[0].videos
        const {classes} = this.props
        return (
            <div>
               <div>
                    <h1>Trending</h1>
                    <GridList cellHeight={160} className={classes.gridList} cols={4}>
                            {videos.map( (data, index) => (
                                <GridListTile className={classes.imageSpacing} key={index} cols={data.cols || 1}>
                                    <video width="320" height="240" controls>
                                        <source src="movie.mp4" type="video/mp4" />
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </GridListTile>
                           
                            ))}
                        </GridList>    
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(Main)