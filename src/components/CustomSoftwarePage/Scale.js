import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import Lottie from 'react-lottie'
import useStyles from './styles'
import scaleAnimation from '../../animations/scaleAnimation/data'

function Scale() {

    const classes = useStyles();
    const theme= useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: scaleAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : 'row'} md>
            <Grid item md>
                <Lottie options={defaultOptions}
                        style={{maxHeight: 260, maxWidth: 280}}
                />
                </Grid>
                <Grid item container direction='column' md>
                    <Grid item>
                        <Typography paragraph variant='h4' align={matchesSM ? 'center' : undefined}>
                            Scale
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? 'center' : 'right'} paragraph variant='body2'>
                              Whether you are a large brand, just getting started, or taking off right now,
                              our application architecture ensures pain-free growth and reliablity.      
                        </Typography>
                    </Grid>
                </Grid>
                        
        </Grid>
    )
}

export default Scale
