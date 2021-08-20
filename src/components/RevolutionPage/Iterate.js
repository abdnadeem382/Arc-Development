import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import iterate from '../../assets/iterateIcon.svg'

function Iterate() {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Iterate
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    The cycle repeats whenever you come up with a new idea for extending your
                    current project, or come up with a brand new system.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    By planning for future features and changes, we can build and evolve your 
                    application over time. As new use cases and customer needs develop, we can
                    respond with continuous integration of new content.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    Our iterative process will keep you current and competitive, allowing you to 
                    quikly implement changes instead of waiting months for a single update.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={iterate}  width="100%" alt='falling dominos' style={{maxWidth: "900",marginTop:"2em"}}/>
        </Grid>
        </>
    )
}

export default Iterate
