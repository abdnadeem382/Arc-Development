import React from 'react'
import {Grid, Typography ,useTheme, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'
import seo from '../../assets/seo.svg'

function  SEO() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography align='center' variant='h4' gutterBottom>
                        Search Engine<br/>Optimization
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={seo} alt="website standing on winner's podium" />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 :'1em'}} className={classes.paraContainer }>
            <Typography align={matchesSM ? "center" : undefined} paragraph variant='body2' >
                How often have you ever been to the second page of Google results?
            </Typography>
            <Typography align={matchesSM ? "center" : undefined} paragraph variant='body2'>
                If you're like us, probably never.
            </Typography>
            <Typography align={matchesSM ? "center" : undefined} paragraph variant='body2'>
                Customers don't go there either, so we make sure your website is designed to end up on top.
            </Typography>
        </Grid>
        </>
    )
}

export default SEO
