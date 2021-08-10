import React from 'react'
import {Grid, Typography, useTheme, IconButton, useMediaQuery, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import useStyles from './styles'
import Analytics from './Analytics'
import Ecommerce from './Ecommerce'
import Outreach from './Outreach'
import SEO from './SEO'
import CallToAction from '../UI/CallToAction/CallToAction'

function WebDevPage({setSelectedIndex, setValue}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container direction='column'>
            <Grid 
                className={classes.rowContainer} 
                style={{marginTop: matchesXS ? "1em": "2em"}}
                item 
                container 
                direction='row' 
                justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight:'1em', marginLeft:'-3.5em'}}>
                        <IconButton component={Link} to='/mobileapps' onClick={()=> setSelectedIndex(2)} className={classes.arrow}>
                            <img src={backArrow} alt="Back to Mobile Apps Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                            Having a website is a necessity in today's business world. They give you one central, public location
                            to let people know who you are, what you do, and why you are the best at it. 
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                            From simply having yours hours posted to having a full fledged online store, making yourself as accessible
                            as possible to users online, drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton component={Link} to='/services' onClick={()=> setSelectedIndex(0)} className={classes.arrow}>
                            <img src={forwardArrow} alt="Forward to Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container className={classes.rowContainer} style={{marginTop: '12em'}} alignItems='center' direction={matchesSM ? 'column' : 'row'}>
                <Analytics/>
            </Grid>
            <Grid item container className={classes.rowContainer} style={{marginTop: '12em', marginBottom: '12em'}} alignItems='center' justify="flex-end" direction={matchesSM ? 'column' : 'row'}>
                <Ecommerce/>
            </Grid>
            <Grid item container className={classes.rowContainer} alignItems='center' direction={matchesSM ? 'column' : 'row'}>
                <Outreach/>
            </Grid>
            <Grid item container className={classes.rowContainer} style={{marginTop: '12em', marginBottom: '12em'}} alignItems='center' justify="flex-end" direction={matchesSM ? 'column' : 'row'}>
                <SEO/>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
}

export default WebDevPage
