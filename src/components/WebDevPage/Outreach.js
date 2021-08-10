import React from 'react'
import {Grid, Typography ,useTheme, useMediaQuery} from '@material-ui/core'
import outreach from '../../assets/outreach.svg'
import useStyles from './styles'

function Outreach() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography align={matchesSM ? "center" : undefined} variant='h4' gutterBottom>
                        Outreach
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={outreach} alt='megaphone' />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 :'1em'}} className={classes.paraContainer }>
        <Typography align={matchesSM ? "center" : undefined} variant='body2'>
            Draw people in with a dazzling website. Showing off your products online is a great way
            to help customers decide what's right for them before visiting in person.
        </Typography>
        </Grid>
        </>
    )
}

export default Outreach
