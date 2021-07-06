import React from 'react'
import {Grid, Typography, useTheme, IconButton, useMediaQuery} from '@material-ui/core'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import lightbulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopWatch from '../../assets/stopwatch.svg'

function CustomSoftware({setSelectedIndex}) {
    const classes = useStyles();
    const theme= useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item container direction='row'>
                <Grid item className={classes.arrowContainer} style={{marginRight:'1em', marginLeft:'-3.5em'}}>
                    <IconButton component={Link} to='/services' onClick={()=> setSelectedIndex(0)} className={classes.arrow}>
                        <img src={backArrow} alt="Back to Services Page"/>
                    </IconButton>
                </Grid>
            
            <Grid item container className={classes.heading}>
                <Grid item>
                    <Typography variant='h2'>Custom Software Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body2' paragraph>
                        Whether we are replacing old software or inventing new solution, Arc Development
                        is here to help your business tackle technology.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        Using regular commercial software leaves you with a lot of stuff you don't need,
                        without some of the stuff you do need, and ultimately controls the way you work.
                        Without using any software at all, you risk falling behind competitiors and missing out on huge savings
                        from increased efficiency.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        Out custom solutions are designed from the ground up with your needs, wants, and goals
                        at the core. This collaborative process produces finely tuned software that is much more effective at imporoving 
                        your workflow and reducing costs than generalized options. 
                    </Typography>
                    <Typography variant='body2' paragraph>
                        We create exactly what you want, exactly how you want it.
                    </Typography>
                </Grid>
                </Grid>
                <Grid item className={classes.arrowContainer}>
                    <IconButton component={Link} to='/mobileapps' onClick={()=> setSelectedIndex(2)} className={classes.arrow}>
                        <img src={forwardArrow} alt="Forward to Mobile App Development Page"/>
                    </IconButton>
                </Grid>
                
            </Grid>
            <Grid item container direction='row' justify='center' style={{marginTop: '15em', marginBottom: '20em'}}>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt='Light Bulb'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopWatch} alt='StopWatch'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt='Cash'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
