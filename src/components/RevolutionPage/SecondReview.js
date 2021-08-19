import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import review from '../../assets/reviewIcon.svg'

function SecondReview() {
    return (
        <>
        <Grid item container direction='column' lg>
            <Grid item>
                <Typography variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Review
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    A second round of review is essential to our goal of creating exactly what
                    you want, exactly how you want it.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
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
