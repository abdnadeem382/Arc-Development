import React from 'react'
import {Grid, Typography, useTheme, IconButton, useMediaQuery} from '@material-ui/core'
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
            <SaveIcons/>
            <Grid>
                <Grid item container direction='row' justify='space-around'>
                    <DigitalDocs/>
                    <Scale/>
                </Grid>
                <Grid item container direction='row' style={{marginTop:"20em", marginBottom: "20em"}}>
                    <RootCause/>
                </Grid>
                <Grid item container direction='row' justify='space-around'>
                    <Automation/>
                    <UserExperience/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
