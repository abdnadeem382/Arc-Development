import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import WebDev from '../WebDev/WebDev'
import ServicesBlock from '../ServicesBlock/ServicesBlock'
import MobileDev from '../MobileDev/MobileDev'

function ServicesPage(props) {
    const theme= useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container direction='column'>
            <Grid item style={{marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em'}}>
                <Typography align={matchesSM ? 'center' : undefined } variant='h2' >Services</Typography>
            </Grid>
            <MobileDev {...props}/>
            <ServicesBlock {...props}/>
            <WebDev {...props} page={true}/>
        </Grid>
    )
}

export default ServicesPage
