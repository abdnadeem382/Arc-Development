import React from 'react'
import Lottie from 'react-lottie'
import integrationAnimation from '../../animations/integrationAnimation/data.json'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'


function PlatformSupport() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: integrationAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : 'row'} style={{marginBottom: matchesMD ? "15em": 0}} md>
        <Grid item container direction='column' md>
                    <Grid item>
                        <Typography align='right' variant='h4' gutterBottom>
                            Simultaneous Platform Support 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='right' variant='body2' paragraph>
                            Our cutting-edge development process allows us to create apps for iPhone, Android and tablets
                            - all at the same time. 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='right' variant='body2' paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
    )
}

export default PlatformSupport
