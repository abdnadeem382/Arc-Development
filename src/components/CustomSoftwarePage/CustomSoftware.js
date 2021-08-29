import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import {Grid, Typography, useTheme, IconButton, useMediaQuery, Hidden} from '@material-ui/core'
import SaveIcons from './SaveIcons'
import DigitalDocs from './DigitalDocs'
import Scale from './Scale'
import Automation from './Automation'
import UserExperience from './UserExperience'
import RootCause from './RootCause'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import CallToAction from '../UI/CallToAction/CallToAction'

function CustomSoftware({setSelectedIndex, setValue}) {
    const classes = useStyles();
    const theme= useTheme();
    const {pathname} = useLocation();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(()=>{
        window.scrollTo(0,0)
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
                        <IconButton component={Link} to='/services' onClick={()=> setSelectedIndex(0)} className={classes.arrow}>
                            <img src={backArrow} alt="Back to Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            <Grid item container className={classes.heading}>
                <Grid item>
                    <Typography align={matchesMD ? 'center' : undefined} variant='h2'>Custom Software Development</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Whether we are replacing old software or inventing new solution, Arc Development
                        is here to help your business tackle technology.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Using regular commercial software leaves you with a lot of stuff you don't need,
                        without some of the stuff you do need, and ultimately controls the way you work.
                        Without using any software at all, you risk falling behind competitiors and missing out on huge savings
                        from increased efficiency.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Out custom solutions are designed from the ground up with your needs, wants, and goals
                        at the core. This collaborative process produces finely tuned software that is much more effective at imporoving 
                        your workflow and reducing costs than generalized options. 
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        We create exactly what you want, exactly how you want it.
                    </Typography>
                </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton component={Link} to='/mobileapps' onClick={()=> setSelectedIndex(2)} className={classes.arrow}>
                            <img src={forwardArrow} alt="Forward to Mobile App Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden> 
            </Grid>
            <SaveIcons/>
            <Grid>
                <Grid className={classes.rowContainer} item container direction={matchesMD ? "column" : 'row'} justify='space-around' alignItems={matchesMD ? 'center' : undefined} >
                    <DigitalDocs/>
                    <Scale/>
                </Grid>
                <Grid className={classes.rowContainer} item container direction='row' style={{marginTop:"20em", marginBottom: "20em"}}>
                    <RootCause/>
                </Grid>
                <Grid className={classes.rowContainer} item container direction={matchesMD ? "column" : 'row'} justify='space-around' alignItems={matchesMD ? 'center' : undefined} style={{marginBottom: "10em"}}>
                    <Automation/>
                    <UserExperience/>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
