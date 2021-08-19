import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import launch from '../../assets/launchIcon.svg'

function Launch() {
    return (
        <>
        <Grid item container direction='column' lg>
            <Grid item>
                <Typography variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Launch
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    The moment we've all been waiting for.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    When construction comes to a close, you are the first one to know.
                    We will give our final demostration to show off your shiny new 
                    software in the wild, so you know wxactly how it will look 
                    to your users.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
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
