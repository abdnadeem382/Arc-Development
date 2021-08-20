import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import review from '../../assets/reviewIcon.svg'

function SecondReview() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Review
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    A second round of review is essential to our goal of creating exactly what
                    you want, exactly how you want it.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    This time we will be going over the finalized designs in another
                    fully interactive demostration. Again, this gives you an opportunity
                    to tweak things and make sure we get everything right the first time.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={review} alt='Magnifying Glass'/>
        </Grid>
        </>
    )
}

export default SecondReview
