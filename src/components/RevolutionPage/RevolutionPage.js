import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'
import Vision from './Vision'
import Technology from './Technology'
import Consultation from './Consultation'
import Mockup from './Mockup'
import Launch from './Launch'
import Maintain from './Maintain'
import Design from './Design'
import Iterate from './Iterate'
import Review from './Review'
import SecondReview from './SecondReview'
import Build from './Build'
import CallToAction from '../UI/CallToAction/CallToAction'

function RevPage({setValue}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container direction='column'>
            <Grid item className={`${classes.rowContainer}  ${classes.topMargin}`}>
                <Typography align={matchesMD ? "center" : undefined} variant='h2' style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} alignItems='center' className={classes.rowContainer} style={{marginTop: "5em"}}>
                <Vision/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} alignItems='center' className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em "}}>
                <Technology/>
            </Grid>
            <Grid item container direction='row' justify='center' className={classes.rowContainer}>
                <Grid item>
                    <Typography variant='h4' gutterBottom>
                        Process
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#B3B3B3", height: '90em'}}>
                <Consultation/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#FF7373", height: '90em'}}>
                <Mockup/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: '90em'}}>
                <Review/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#A67C52", height: '90em'}}>
                <Design/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: '90em'}}>
                <SecondReview/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#FBB03B", height: '90em'}}>
                <Build/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#C1272D", height: '90em'}}>
                <Launch/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#8E45CE", height: '90em'}}>
                <Maintain/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : 'row'} className={classes.rowContainer} style={{backgroundColor: "#29ABE2", height: '90em'}}>
                <Iterate/>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>   
        </Grid>
    )
}

export default RevPage
