import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import useStyles from './styles';
import {Grid} from '@material-ui/core'
import HeroBlock from '../HeroBlock/HeroBlock'
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import MobileDev from '../MobileDev/MobileDev';
import WebDev from '../WebDev/WebDev';
import RevolutionBlock from '../RevolutionBlock/RevolutionBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import CallToAction from '../UI/CallToAction/CallToAction';

function LandingPage(props) {
    const classes = useStyles();
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[pathname])

    return (
        
        <Grid container direction='column' className={classes.mainContainer} >
            <HeroBlock {...props}/>
            <ServicesBlock {...props}/>
            <MobileDev {...props}/>
            <WebDev {...props}/>
            <RevolutionBlock {...props}/>
            <InfoBlock {...props}/>
            <CallToAction {...props}/>
        </Grid>
        
    )
}

export default LandingPage
