import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import Lottie from 'react-lottie'
import useStyles from './styles'
import documentsAnimation from '../../animations/documentsAnimation/data'

function DigitalDocs() {

    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: documentsAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <Grid item container className={classes.itemContainer} md>
                        <Grid item container direction='column' md>
                            <Grid item>
                                <Typography paragraph variant='h4'>
                                    Digitial Documents  Data
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography paragraph variant='body2'>
                                    Reduce Errors. Reduce Waste. Reduce Costs.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography paragraph variant='body2'>
                                    Billions are spent anually on the purchasing, printing, and distribution of paper. On top of the massive environmental 
                                    impact this has, it causes harm to your bottom line as well.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body2'>
                                    By utilizing digital forms and documents, you can remove these obsolete expenses, accelerate your communication,
                                    and help the Earth.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md>
                            <Lottie options={defaultOptions} isStopped={true} 
                                style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}
                            />
                        </Grid>
                    </Grid>
    )
}

export default DigitalDocs
