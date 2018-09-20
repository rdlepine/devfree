import React, {Component} from 'react'
import {Paper, Button, FormControl, withStyles, Input, InputAdornment, InputLabel} from '@material-ui/core'
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
  }

class Upload extends Component {

    state = {
        user: {

        }
    }

    formFill(property, event) {
    
        let {user} = this.state
        user[property] = event.target.value
 
        this.setState({user:user})
     
 
     }

    render() {

        const {classes} = this.props

        return (
            <Paper>
                <form  onSubmit={this.onSubmit} className={classes.uploadDiv}>
                    <FormControl>
                        <InputLabel className={classes.labelText} htmlFor="videoTitle">Title</InputLabel>
                        <Input required className={classes.inputMargins}
                            id="videoTitle"
                            required
                            onChange={this.formFill.bind(this, 'videoTitle')}
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
                                multiline="true"
                                maxLength="255"
                                rowsMax="4"
                                onChange={this.formFill.bind(this, 'description')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            className={classes.inputMargins}
                            variant="raised"
                            color="primary"
                            containerElement='label' // <-- Just add me!
                            label='My Label'>
                            <input type="file" />
                        </Button>
                        <Button
                            className={classes.inputMargins}
                            variant="raised"
                            color="primary"
                        >
                            Submit
                        </Button>

                    
                </form>
            </Paper>    
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     userLogin: (user) => dispatch(userLogin(user)),
      
    // }
 }

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Upload))