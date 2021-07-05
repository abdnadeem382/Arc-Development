import React from 'react'
import useStyles from './styles';
import {Grid, Button, Typography} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme, useMediaQuery } from '@material-ui/core';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import {Link} from 'react-router-dom'

function ServicesBlock({setValue, setSelectedIndex}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
    return (
            <Grid className={classes.serviceContainer} justify={matchesSM ? 'center' : undefined} container direction='row'>
                <Grid style={{marginLeft: matchesSM ? 0: "5em", textAlign: matchesSM ? 'center': undefined}} item>
                    <Typography variant='h4'>Custom Software Development</Typography>
                    <Typography className={classes.subtitle} variant='subtitle1'>Save Energy. Save Time. Save Money</Typography>
                    <Typography variant='subtitle1'>Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration</span></Typography>
                    <Button onClick={()=>{setValue(1); setSelectedIndex(1)}} component={Link} to='/customsoftware' className={classes.learnBtnServices} variant = 'outlined'>
                        <span style={{marginRight: 6.5}}>Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>  
                </Grid>
                <Grid item style={{paddingLeft: matchesSM ? '5em': 0, paddingRight: matchesSM ? '5em': 0}}>
                    <img className={classes.img} src={customSoftwareIcon} alt='custom software icon'/>
                </Grid>
            </Grid>
    )
}

export default ServicesBlock
