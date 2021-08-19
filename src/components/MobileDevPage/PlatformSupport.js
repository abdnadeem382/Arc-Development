import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'

function PlatformSupport() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (  
        <Grid item container direction='column' md>
            <Grid item>
                <Typography  align={matchesSM ? "center" : 'right'} variant='h4' gutterBottom>
                    Simultaneous Platform Support 
                </Typography>
            </Grid>
            <Grid item>
                <Typography align={matchesSM ? "center" : 'right'} variant='body2' paragraph>
                    Our cutting-edge development process allows us to create apps for iPhone, Android and tablets
                    - all at the same time. 
                </Typography>
            </Grid>
            <Grid item>
                <Typography align={matchesSM ? "center" : 'right'} variant='body2' paragraph>
                    This significantly reduces costs and creates a more unified brand experience across all devices.
                </Typography>
            </Grid>
        </Grid>
                
    )
}

export default PlatformSupport
