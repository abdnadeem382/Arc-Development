import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import Lottie from 'react-lottie'
import useStyles from './styles'
import automationAnimation from '../../animations/automationAnimation/data'

function Automation() {

    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: automationAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <Grid item container className={classes.itemContainer} md>
                        <Grid item container direction='column' md>
                            <Grid item>
                                <Typography paragraph variant='h4'>
                                    Automation
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography paragraph variant='body2'>
                                    Why waste time when you don't have to?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography paragraph variant='body2'>
                                    We can help you identify processes with time or event based actions which can now easily be automated.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body2'>
                                    Increasing efficiency incres=ases profits, leaving you more time to focus on yout business,
                                    not busywork. 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={defaultOptions} isStopped={true} 
                                style={{maxHeight: 290, maxWidth: 280}}
                            />
                        </Grid>
                    </Grid>
    )
}

export default Automation
