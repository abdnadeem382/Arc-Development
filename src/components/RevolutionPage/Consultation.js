import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import consultation from '../../assets/consultationIcon.svg'
function Consultation() {
    return (
        <>
        <Grid item container direction='column' lg>
            <Grid item>
                <Typography variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Consultation
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Our process begins the moment you realize you need a piece of technology
                    for your business. Whether you already have an idea for where to start
                    and what to do, or if you just know you want to step things up, our
                    initial consultation will help you examine your business holistically
                    to find the best solutions.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Detailed notes will be taken on your requirements and constraints,
                    while taking care to identify other potential areas for consideration.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
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
