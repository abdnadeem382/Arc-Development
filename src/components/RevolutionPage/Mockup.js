import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import mockup from '../../assets/mockupIcon.svg'

function Mockup() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item container direction='column' lg alignItems={matchesMD ? "center" : undefined}>
            <Grid item>
                <Typography align={ matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Mockup
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    After we settle on the best path forward and decide on a solution to 
                    pursue, details like the cost and timeline will be finalized.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    Then it's time for us to start on your minimum value product.
                    That's just a fancy term for a Mockup, which does not include 
                    colors, images, or any other polished design elements, but captures
                    the essential layout structure and functionality.
                </Typography>
                <Typography align={ matchesMD ? 'center' : undefined} variant='body2' style={{color: "#fff"}} paragraph>
                    This helps us understand and refine the solution itself before getting
                    distracted by specifics and looks.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={mockup} alt='basic website design outline'/>
        </Grid>
        </>
    )
}

export default Mockup
