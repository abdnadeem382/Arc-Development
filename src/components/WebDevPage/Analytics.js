import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import analytics from '../../assets/analytics.svg'
import useStyles from './styles'

function Analytics() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography align={matchesSM ? "center" : undefined} variant='h4' gutterBottom>
                        Analytics
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={analytics} alt='graph with magnifying glass' style={{marginLeft: '-2.75em'}}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.paraContainer }>
        <Typography align={matchesSM ? "center" : undefined} variant='body2'>
            Knowledge is power and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
        </Typography>
        </Grid>
        </>
    )
}

export default Analytics
