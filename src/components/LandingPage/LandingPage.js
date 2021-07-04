import React from 'react'
import useStyles from './styles';
import {Grid} from '@material-ui/core'
import HeroBlock from '../HeroBlock/HeroBlock'
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import MobileDev from '../MobileDev/MobileDev';
import WebDev from '../WebDev/WebDev';
import RevolutionBlock from '../RevolutionBlock/RevolutionBlock';
import InfoBlock from '../InfoBlock/InfoBlock';

function LandingPage() {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.mainContainer} >
            <HeroBlock/>
            <ServicesBlock/>
            <MobileDev/>
            <WebDev/>
            <RevolutionBlock/>
            <InfoBlock/>
        </Grid>
        
    )
}

export default LandingPage