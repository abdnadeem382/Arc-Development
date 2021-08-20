import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import launch from '../../assets/launchIcon.svg'

function Launch() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Launch
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    The moment we've all been waiting for.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    When construction comes to a close, you are the first one to know.
                    We will give our final demostration to show off your shiny new 
                    software in the wild, so you know wxactly how it will look 
                    to your users.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    When you say the word, we press the button and launch your
                    project out to the public. We are there to ensure everything goes 
                    to plan so you can start reaping the rewards of your technological
                    investment immediately.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={launch} alt='Rocket'/>
        </Grid>
        </>
    )
}

export default Launch
