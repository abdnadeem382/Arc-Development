import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import design from '../../assets/designIcon.svg'

function Design() {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Design
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    Using the mockups and notes taken during the consultation as guides,
                    we will start ironing out what the final product will look like.
                    This also involves using any brand material like fonts, colors, and 
                    logos to extend the experience you are already familiar with.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    No aspect is superfluous, and care will be taken with every decision.
                </Typography>   
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={design} alt='Paintbrush leaving stroke of paint'/>
        </Grid>
        </>
    )
}

export default Design
