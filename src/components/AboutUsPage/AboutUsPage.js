import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import useStyles from './styles'
import History from './History';
import Team from './Team';

function AboutUsPage() {
    const classes = useStyles();
    const theme = useTheme();
    const {pathname} = useLocation();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[pathname])

    return (
        <Grid container direction='column'>
            <Grid item className={classes.rowContainer} style={{marginTop: '2em'}}>
                <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                    About Us
                </Typography>
            </Grid>
            <Grid item container justify="center" className={classes.topMargin} >
                <Typography align="center" variant='h4' className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests,
                    technology is meant to bring us closer to what we care about in the best way possible. 
                    Arc development will use that principle to provide fast, modern, inexpensive and
                    aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid item container direction={matchesMD ? 'column' : 'row'} alignItems={matchesMD? 'center' : undefined} justify='space-around' className={`${classes.rowContainer} ${classes.topMargin}`}>
               <History/>
            </Grid>
            <Grid item container direction="column" alignItems="center" className={`${classes.rowContainer} ${classes.topMargin}`}>      
                <Team/>
            </Grid>
        </Grid>
    )
}

export default AboutUsPage
