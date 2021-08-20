import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import consultation from '../../assets/consultationIcon.svg'

function Consultation() {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Consultation
                </Typography>
            </Grid>
            <Grid item style={{}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff", maxWidth: '22em'}} paragraph>
                    Our process begins the moment you realize you need a piece of technology
                    for your business. Whether you already have an idea for where to start
                    and what to do, or if you just know you want to step things up, our
                    initial consultation will help you examine your business holistically
                    to find the best solutions.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff", maxWidth: '22em'}} paragraph>
                    Detailed notes will be taken on your requirements and constraints,
                    while taking care to identify other potential areas for consideration.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff", maxWidth: '22em'}} paragraph>
                    Cutting-edge advancements in machine learning like object detection and 
                    natural language processing allow computers to do things previously
                    unimaginable, and our expertise and intuition will help usher you into
                    this new future possibilities.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={consultation} alt='handshake'/>
        </Grid>
        </>
    )
}

export default Consultation
