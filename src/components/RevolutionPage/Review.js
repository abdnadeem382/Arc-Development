import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import review from '../../assets/reviewIcon.svg'

function Review() {
    const theme = useTheme();
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
                    Before moving any farther we come back to you with our progress.
                    That gives you freedom to discuss any changes you may want or any ideas 
                    you may have come up with before heavy lifting has been done.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    We give you an interactive demostration of the mockups, 
                    thoroughly explaining the thought process that went into each screen
                    and every anticipated feature.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    Once you are completely satisfied with the vision of our solution
                    , we get  down to the nitty gritty, fine-details of design.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={review} width="100%" alt='Magnifying Glass' style={{maxWidth: 900, marginTop:"2em"}}/>
        </Grid>
        </>
    )
}

export default Review
