import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import Lottie from 'react-lottie'
import useStyles from './styles'
import uxAnimation from '../../animations/uxAnimation/data'

function UserExperience() {

    const classes = useStyles();
    const theme= useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: uxAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : 'row'} md>
            <Grid item md>
                <Lottie options={defaultOptions}
                        style={{maxHeight: 310, maxWidth: 155}}
                />
                </Grid>
                <Grid item container direction='column' md>
                    <Grid item>
                        <Typography align={matchesSM ? 'center' : 'right'} paragraph variant='h4'>
                            User Experience Design 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? 'center' : 'right'} paragraph variant='body2'>
                              A good design that isn't usable isn't a good design   
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? 'center' : 'right'} paragraph variant='body2'>
                              So why are so many pieces of software complicated, confusing and frustrating?   
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? 'center' : 'right'} paragraph variant='body2'>
                              By prioritizing users and the real ways they interact with technology, we are able to develop
                              unique, personable experiences that solve problems rather than create new ones.  
                        </Typography>
                    </Grid>
                </Grid>
                        
        </Grid>
    )
}

export default UserExperience
