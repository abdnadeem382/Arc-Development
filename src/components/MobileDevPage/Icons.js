import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import swiss from '../../assets/swissKnife.svg'
import access from '../../assets/extendAccess.svg'
import engagement from '../../assets/increaseEngagement.svg'

function Icons() {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <>
        <Grid item container direction='column' alignItems='center' md>
            <Grid item>
                <Typography align='center' variant='h4' gutterBottom> 
                    Extend Functionality
                </Typography>
            </Grid>
            <Grid item>
                <img src={swiss} alt='swiss army knife'/>
            </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? '10em' : 0 }}>
            <Grid item>
                <Typography align='center' variant='h4' gutterBottom> 
                    Extend Access
                </Typography>
            </Grid>
            <Grid item>
                <img src={access} alt='tear-one-off sign' style={{maxWidth: matchesXS ? "22em" : "28em"}}/>
            </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
            <Grid item>
                <Typography align='center' variant='h4' gutterBottom> 
                    Increase Engagement
                </Typography>
            </Grid>
            <Grid item>
                <img src={engagement} alt='app with notification'/>
            </Grid>
        </Grid>
        </>
    )
}

export default Icons
