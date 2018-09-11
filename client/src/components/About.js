import React, {Component} from 'react'
import { withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core'
import {Check} from '@material-ui/icons'
import 'typeface-roboto'

const styles = {
    displayPage: {
      display: 'flex',
      flexDirection: 'column',
    },
    marginPos: {
        textAlign: 'left',
        fontWeight: 500,
    },
    check: {
        marginRight: 5,
    }
 };

function About(props) {

    const {classes} = props

    return (
        <div className={classes.displayPage}>
            <h1>About Freedom's Bell</h1>
            <Grid container spacing={12}>

                <Grid item xs={2} />
                <Grid item xs={8}>
                <Typography variant="headline" gutterBottom className={classes.marginPos}><Check className={classes.check} />Freedom's Bell is designed to allow all voices to be heard regardless of political or religious persuasion. Right, Left or in the middle. We track no one and your data will NEVER be sold.
                </Typography>
            
                </Grid>
                <Grid item xs={2} />
                
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="headline" gutterBottom className={classes.marginPos}><Check className={classes.check}/>Profanity, Nudity or calls to Violence of ANY kind is prohibited and will result in the IMMEDIATE removal of content   and BANNING from the site any IP Address that submits such content.
                    </Typography>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="headline" gutterBottom className={classes.marginPos}><Check className={classes.check}/>Profanity includes everyday “slang” that many are unfortunately accustomed to. If you need to “cuss”, post at YouTube. Words like   “sucks, bitch, shit, ass” etc are the words of juveniles and we don't want to propagate such nonsense. They will be caught and deleted when found.
                    </Typography>
                 </Grid>
                <Grid item xs={2} />

                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="headline" gutterBottom className={classes.marginPos}><Check className={classes.check}/>Nudity means just what it says. No exposed female breasts or genitalia of either sex is permitted. Period. Bikini's and Speedo's   are cool.
                    </Typography>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="headline" gutterBottom className={classes.marginPos}><Check className={classes.check} />Violence is easy to define. If you have a video or audio posted that is removed for this reason, you have the right to petition the reinstatement of such. We will respond to your petition within 48 hours with a determination and a complete explanation of why it was pulled. If we agree with your petition, we will restore the video or audio in question with our explanation attached if desired.
                    </Typography>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    )

}

export default withStyles(styles)(About)