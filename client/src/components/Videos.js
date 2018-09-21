import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardContent, Avatar, Typography, Button} from '@material-ui/core'
import {userLogin} from '../containers/actions';
import {Videocam, CloudUpload} from '@material-ui/icons'
import Video from './Video'
import Upload from './Upload'
import {connect} from 'react-redux'
import 'typeface-roboto'
import mediaJSON from '../data/streaming.js'

const styles = {
    card: {
        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginTop: 100,
        marginBottom: 20,
        maxHeight: '100%',
        overflow: 'auto',
        width: 750,
        background: "#ffffff",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
      margin: {
      marginTop: 1,
       
    },
    header: {
        
        height: 30,
        width: 30,
        borderRadius: 10,
        backgroundImage: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
       
        position: 'absolute',
        marginTop: -30,
        marginLeft: 10,
        boxShadow:
        "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    },
    headerIcon: {
        background: "transparent",
        borderRadius: 0,
        color: '#cc0c0c0',
        transform: "scale(1.8)"
    },
    labelText: {
        fontSize: "1.2em",
        fontWeight: 600,
    },
    buttonLink: {
        marginTop: 10,
        textDecoration: "none",
        color: '#304FFE',
    },
    errorMessage: {
        fontSize: 18,
        marginTop: 10,
        color: 'red',

    },
    btnMargin: {
        marginBottom: 20,
    },
    uploadDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 300,
        margin: 'auto',
    },
    allVideos: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    video: {
        justifyContent: 'center',
        margin: 'auto',
       
    },
    leftIcon: {
        margin: '0 5px 0 5px',
    }
    
   
  };

class Videos extends Component {
 
    state = {
        uploadVisible: true,
        videos: [],
    }

  
    toggleUpload = () => {
        this.setState({uploadVisible: !this.state.uploadVisible})
    }

    formFill(property, event) {
    
        let {user} = this.state
        user[property] = event.target.value
 
        this.setState({user:user})
     
 
     }

     componentDidMount() {
         this.setState({uploadVisible: true})
         this.setState({videos: mediaJSON.categories[0].videos})
     }

    render () {
    
        const {classes, user} = this.props
        const {err, uploadVisible, videos} = this.state

        return (
            <div>
                  <Card className={classes.card}>
                    
                    <CardHeader className={classes.header} avatar={
                        <Avatar className={classes.headerIcon}>
                            <Videocam />
                        </Avatar>
                        }
                    />    
                    <CardContent className={classes.allVideos}>
                        <Typography variant="display1" className={classes.title}>
                            MY VIDEOS
                        </Typography>
                        <Button color="primary" onClick={this.toggleUpload} className={classes.btnMargin}>
                            <CloudUpload className={classes.leftIcon} />
                            Upload Video
                        </Button>
                        <div hidden={uploadVisible}  >
                            <Upload />
                        </div>
                        {videos === undefined || videos.length === 0?
                                <Typography variant="subheading">
                                    You have no videos
                                </Typography>
                            :
                            <div className={classes.video}>
                                {
                                    videos.map((video, index) => {
                                        return (
                                            <Video key={index} video={video}/>
                                        )
                                    })
                                }
                            </div>
                        }
                    </CardContent>
                </Card>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user)),
      
    }
 }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Videos))