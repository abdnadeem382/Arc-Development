import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

function AboutUsPage() {
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant="h2">
                    About Us
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h4' className={classes.missionStatement}>

                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutUsPage
