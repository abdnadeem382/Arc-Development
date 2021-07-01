import React from 'react'
import useStyles from './styles';
import {Grid} from '@material-ui/core'
import HeroBlock from '../HeroBlock/HeroBlock'
import ServicesBlock from '../ServicesBlock/ServicesBlock';

function LandingPage() {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.mainContainer} >
            <HeroBlock/>
            <ServicesBlock/>
        </Grid>
        
    )
}

export default LandingPage
