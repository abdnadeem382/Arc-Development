import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import roots from '../../assets/root.svg'
import useStyles from './styles'

function RootCause() {
    const classes = useStyles();
    const theme= useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid item container direction='column' alignItems='center'>
                        <Grid item>
                            <img 
                                src={roots} 
                                alt='Tree with roots extending out' 
                                height={matchesSM ? "300em" : "450em"} 
                                width={matchesSM ? "300em" : "450em"} />
                        </Grid>
                        <Grid item className={classes.itemContainer}> 
                            <Typography variant='h4' align='center' gutterBottom>
                                Root-Cause Analysis
                            </Typography>
                            <Typography variant='body2' align='center' paragraph>
                                Many problems are merely symptoms of larger, underlying issues.
                            </Typography>
                            <Typography variant='body2' align='center' paragraph>
                               We can help you thoroughly examine all areas of your business to develop a
                               holistic plan for the most effective implementation of technology.
                            </Typography>
                        </Grid>
                    </Grid>
    )
}

export default RootCause
