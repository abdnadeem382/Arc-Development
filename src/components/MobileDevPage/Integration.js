import React from 'react'
import Lottie from 'react-lottie'
import integrationAnimation from '../../animations/integrationAnimation/data.json'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'


function Integration() {
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
        <>
        <Grid item container direction='column' md>
                    <Grid item>
                        <Typography variant='h4' gutterBottom>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body2' paragraph>
                            Our technology enables an innate interconnection between web and mobile applications, putting everything 
                            you need right in one convenient place.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body2' paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship
                            with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions}/>
                </Grid>
                </>
    )
}

export default Integration
