import React from 'react'
import {Grid, Typography, useTheme, IconButton, useMediaQuery, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import Vision from './Vision'
import Technology from './Technology'

function RevPage() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid container direction='column'>
            <Grid item className={`${classes.rowContainer}  ${classes.topMargin}`}>
                <Typography variant='h2' style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>
            <Grid item container direction='row' alignItems='center' className={classes.rowContainer}>
                <Vision/>
            </Grid>
            <Grid item container direction='row' alignItems='center' className={classes.rowContainer}>
                <Technology/>
            </Grid>
        </Grid>
    )
}

export default RevPage
