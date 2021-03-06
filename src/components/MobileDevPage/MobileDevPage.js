import React, {useEffect} from 'react'
import { useLocation } from 'react-router'
import {Grid, Typography, useTheme, IconButton, useMediaQuery, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import useStyles from './styles'
import Integration from './Integration'
import PlatformSupport from './PlatformSupport'
import Icons from './Icons'
import CallToAction from '../UI/CallToAction/CallToAction'

function MobileDevPage({setSelectedIndex, setValue}) {
    const classes = useStyles();
    const theme = useTheme();
    const {pathname} = useLocation();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[pathname])

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
                        <IconButton component={Link} to='/customsoftware' onClick={()=> setSelectedIndex(1)} className={classes.arrow}>
                            <img src={backArrow} alt="Back to Custom Software Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography align={matchesMD ? 'center' : undefined} variant='h2'>iOS/Android App Development</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Mobile apps allow you to take your tools on the go. 
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Whether you want an app for your customers, employees, or yourself, we can build cross-platform
                        native solutions for any part of your business process. This opens you up to a whole new world of 
                        possibilities by taking advantage of phone features like the camera, GPS, push notifications and more.
                    </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                            Convenience. Connection.
                        </Typography> 
                </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton component={Link} to='/website' onClick={()=> setSelectedIndex(3)} className={classes.arrow}>
                            <img src={forwardArrow} alt="Forward to Website Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
                <Grid item container direction={matchesSM ? "column" : 'row'} style={{marginTop: "15em", marginBottom: "15em"}} className={classes.rowContainer} >
                    <Integration/>
                    <PlatformSupport/>
                </Grid> 
                <Grid item container direction={matchesMD ? "column" : 'row'}  style={{ marginBottom: "15em"}} className={classes.rowContainer}>
                    <Icons/>
                </Grid>
                <Grid item>
                    <CallToAction setValue={setValue}/>
                </Grid>   
        </Grid>
    )
}

export default MobileDevPage
