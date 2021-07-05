import React from 'react'
import useStyles from '../ServicesBlock/styles';
import {Grid, Button, Typography} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme, useMediaQuery } from '@material-ui/core';
import websitesIcon from '../../assets/websiteIcon.svg'
import {Link} from 'react-router-dom'

function WebDev({setValue, setSelectedIndex, page}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
    return (
        page ? 
            <Grid className={classes.serviceContainer} justify={matchesSM ? 'center' : 'flex-end'} container direction='row'>
                <Grid style={{textAlign: matchesSM ? 'center': undefined, width: matchesSM ? undefined : '35em'}} item>
                    <Typography variant='h4'>Website Development</Typography>
                    <Typography className={classes.subtitle} variant='subtitle1'>Reach More. Discover More. Sell More</Typography>
                    <Typography variant='subtitle1'>Optimized for Search Engines, built for speed </Typography>
                    <Button onClick={()=>{setValue(1); setSelectedIndex(3)}} component={Link} to='/website' className={classes.learnBtnServices} variant = 'outlined'>
                        <span style={{marginRight: 6.5}}>Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>  
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0: "5em"}}>
                    <img className={classes.img} width='250em' src={websitesIcon} alt='Web app development icon'/>
                </Grid>
            </Grid>
        :
        <Grid className={classes.serviceContainer} justify={matchesSM ? 'center' : undefined} container direction='row'>
                <Grid style={{marginLeft: matchesSM ? 0: "5em", textAlign: matchesSM ? 'center': undefined, width: matchesSM ? undefined : '35em'}} item>
                    <Typography variant='h4'>Website Development</Typography>
                    <Typography className={classes.subtitle} variant='subtitle1'>Reach More. Discover More. Sell More</Typography>
                    <Typography variant='subtitle1'>Optimized for Search Engines, built for speed </Typography>
                    <Button onClick={()=>{setValue(1); setSelectedIndex(3)}} component={Link} to='/website' className={classes.learnBtnServices} variant = 'outlined'>
                        <span style={{marginRight: 6.5}}>Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>  
                </Grid>
                <Grid item>
                    <img className={classes.img} width='250em' src={websitesIcon} alt='Web app development icon'/>
                </Grid>
        </Grid>
            
    )
}

export default WebDev
