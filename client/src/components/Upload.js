import React, {Component} from 'react'
import {Paper, Button, FormControl, withStyles, Input, InputAdornment, InputLabel, CircularProgress} from '@material-ui/core'
import green from '@material-ui/core/colors/green';
import {postVideo} from '../containers/actions'
import {connect} from 'react-redux'

const styles = {

    inputMargins: {
        margin: '1px 0 10px 0',
       
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
    fileProgress: {
        color: green[500],
        marginLeft: -150,
        marginTop: -5,
        zIndex: 1,
    },
    chooseFile: {
        display: 'flex',
    }
  }

class Upload extends Component {

    state = {
        fileLoading: false,
        uploadData: {
            title: '',
            description: '',
            video: ''
        }, 
        canSubmit: false,
    }

    submitVideo = () => {
        let {uploadData} = this.state
        let {postVideo, user} = this.props

   //    uploadData.user = user
   //     console.log("video", uploadData)
        postVideo(uploadData)
    }

    formFill(property, event) {
    
        let {uploadData} = this.state
        uploadData[property] = event.target.value

        this.setState({uploadData:uploadData})
        this.canSubmit()
    }

    canSubmit = () => {
        const {uploadData} = this.state
 
        if(uploadData.title.length === 0 || uploadData.description.length === 0 || uploadData.video.length === 0) {
            this.setState({canSubmit: false})
        } else {
            this.setState({canSubmit: true})
        }
    
    }

    loadVideo (video, e) {
    
        let reader = new FileReader()
        let files = e.target.files
        reader.readAsDataURL(files[0])
      
        this.setState({fileLoading: true})
        reader.onload = (e) => {
            let {uploadData} = this.state
            uploadData.video = e.target.result
            this.setState({uploadData: uploadData})
            this.setState({fileLoading: false})
            this.canSubmit()
        }

    }

    render() {

        const {classes} = this.props
        const {fileLoading, canSubmit} = this.state

        return (
            <Paper>
                <form  onSubmit={this.onSubmit} className={classes.uploadDiv}>
                    <FormControl>
                        <InputLabel className={classes.labelText} htmlFor="videoTitle">Title</InputLabel>
                        <Input required className={classes.inputMargins}
                            id="videoTitle"
                            onChange={this.formFill.bind(this, 'title')}
                            startAdornment={
                                <InputAdornment position="start"> 
                                *
                                </InputAdornment>
                            }
                        />
                        </FormControl>
                        <FormControl className={classes.inputMargins}>
                            <InputLabel className={classes.labelText} htmlFor="descripttion">Description</InputLabel>
                            <Input className={classes.inputMargins}
                                id="verifyPassword"
                                multiline
                                maxLength="255"
                                rowsMax="4"
                                onChange={this.formFill.bind(this, 'description')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        ""
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className={classes.chooseFile}>
                            <Button
                                className={classes.inputMargins}
                                variant="raised"
                                color="primary"
                                label='My Label'>
                                <input type="file" onChange={this.loadVideo.bind(this, 'video')}/>
                            </Button>
                            {fileLoading && <CircularProgress size={48} className={classes.fileProgress} />}
                        </div>
                        <Button
                            className={classes.inputMargins}
                            variant="raised"
                            color="primary"
                            disabled={!canSubmit}
                            onClick={this.submitVideo}
                        >
                            Submit
                        </Button>

                    
                </form>
               
            </Paper>    
        )
    }

}

const mapDispatchToProps = (dispatch) => {
      return {
            postVideo: (video) => dispatch(postVideo(video))  
      }
  }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Upload))